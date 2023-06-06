/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Link', () => {
  test('Link / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Link / Reversed', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link--reversed&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Link / Accent', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link--accent&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
