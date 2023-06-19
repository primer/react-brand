/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: ComparisonTable', () => {
  test('ComparisonTable / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-comparisontable--playground&viewMode=story')

    await page.waitForTimeout(1500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Playground (mobile)', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('ComparisonTable / Playground (mobile)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-comparisontable--playground-mobile&viewMode=story',
      )

      await page.waitForTimeout(1500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })
  test('ComparisonTable / Minimal', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-comparisontable--minimal&viewMode=story')

    await page.waitForTimeout(1500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
