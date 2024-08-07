/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Accordion', () => {
  test('Accordion / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-accordion--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('Accordion / Composition', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-accordion--composition&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })
})
