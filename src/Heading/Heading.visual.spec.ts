/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Heading', () => {
  test('Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Scale', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-heading--scale&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
