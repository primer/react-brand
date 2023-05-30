/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: InlineLink', () => {
  test('InlineLink / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--default&viewMode=story')

    await page.waitForTimeout(200)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('InlineLink / Scale', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--scale&viewMode=story')

    await page.waitForTimeout(200)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('InlineLink / Example', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--example&viewMode=story')

    await page.waitForTimeout(200)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('InlineLink / Size Inheritence', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-inlinelink--size-inheritence&viewMode=story')

    await page.waitForTimeout(200)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
