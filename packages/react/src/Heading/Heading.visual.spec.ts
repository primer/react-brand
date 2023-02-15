/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Heading', () => {
  test('Heading / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Scale', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--scale&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Size', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--override-size&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Weight', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--override-weight&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Weight Responsive', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-heading--override-weight-responsive&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Stretch', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--override-stretch&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Stretch Responsive', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-heading--override-stretch-responsive&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Heading / Override Letter Spacing', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-heading--override-letter-spacing&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
