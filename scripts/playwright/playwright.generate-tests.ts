// eslint-disable-next-line import/no-commonjs, @typescript-eslint/no-var-requires
const {stories} = require('../../docs/public/storybook/stories')
const fs = require('fs')
const path = require('path')
const prettier = require('prettier')
const prettierOptions = require('../../.prettierrc.js')

const port = 6006

/**
 * Manual lookup for tests that need animation to complete before tests start
 */
const waitForTimeoutLookup = {
  'components-faq-fixtures--all-open': 250, // for the animation
  'components-river--video': 1000 // video is slow to load
}

const categorisedStories = Object.keys(stories).reduce((acc, key) => {
  const {id, story: storyName, importPath} = stories[key]

  const groupName = importPath.split('/')[2]
  const storyFolder = importPath.substring(0, importPath.lastIndexOf('/'))

  if (!acc[groupName]) {
    acc[groupName] = {}
  }

  if (!acc[groupName].stories) {
    acc[groupName].stories = []
  }

  if (!acc[groupName].storyFolder) {
    acc[groupName].storyFolder = path.resolve('.', storyFolder)
  }

  acc[groupName].stories.push({
    id,
    storyName,
    timeout: waitForTimeoutLookup[key] ? waitForTimeoutLookup[key] : undefined
  })

  return acc
}, {})

for (const key of Object.keys(categorisedStories)) {
  const {stories: componentStories, storyFolder} = categorisedStories[key]

  const content = `
  /*
  * Do not modify this file directly.
  * This file was generated by: ${path.basename(__filename)}.
  */
  import {test, expect} from '@playwright/test'

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Visual Comparison: ${key}', () => {

    ${componentStories.reduce((acc, {id, storyName, timeout}) => {
      return (acc += `
        test('${storyName}', async ({page}) => {
            await page.goto('http://localhost:${port}/iframe.html?args=&id=${id}&viewMode=story')
            
            ${timeout ? `await page.waitForTimeout(${timeout})` : ''}
            expect(await page.screenshot()).toMatchSnapshot()
          })
          
          `)
    }, '')}
    
  })
  
  `
  const final = prettier.format(content, {parser: 'typescript', ...prettierOptions})
  const dest = `${path.resolve(__dirname, storyFolder)}/${key}.visual.spec.ts`

  try {
    fs.writeFileSync(dest, final, {
      encoding: 'utf8'
    })
    // eslint-disable-next-line no-console
    console.log('Wrote:', dest)
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message, err)
    }
  }
}
