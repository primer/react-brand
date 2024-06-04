/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Article', () => {
  test('Article / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=recipes-seo-article-page--playground&viewMode=story')

    await page.waitForTimeout(4000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Article / All Headings', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=recipes-seo-article-page--all-headings&viewMode=story')

    await page.waitForTimeout(4000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Article / Ai Theme', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=recipes-seo-article-page--ai-theme&viewMode=story')

    await page.waitForTimeout(4000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Article / Collaboration Theme', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-seo-article-page--collaboration-theme&viewMode=story',
    )

    await page.waitForTimeout(4000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Article / Enterprise Theme', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-seo-article-page--enterprise-theme&viewMode=story',
    )

    await page.waitForTimeout(4000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Article / Security Theme', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-seo-article-page--security-theme&viewMode=story',
    )

    await page.waitForTimeout(4000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Article / Productivity Theme', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=recipes-seo-article-page--productivity-theme&viewMode=story',
    )

    await page.waitForTimeout(4000)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
