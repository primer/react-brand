/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: LayoutExamples', () => {
  test('LayoutExamples / Kitchen Sink', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=layout-full-page-examples--kitchen-sink-playground&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Kitchen Sink (mobile)', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('LayoutExamples / Kitchen Sink (mobile)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=layout-full-page-examples--kitchen-sink-playground-mobile&viewMode=story'
      )

      expect(await page.screenshot()).toMatchSnapshot()
    })
  })
  test('LayoutExamples / Resources Hub', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=layout-full-page-examples--resources-hub-example-playground&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Resources Hub (mobile)', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('LayoutExamples / Resources Hub (mobile)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=layout-full-page-examples--resources-hub-example-mobile-playground&viewMode=story'
      )

      expect(await page.screenshot()).toMatchSnapshot()
    })
  })
})
