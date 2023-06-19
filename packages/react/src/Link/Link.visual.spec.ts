/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Link', () => {
  test('Link / Large', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link-features--large&viewMode=story')

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Link / Reversed', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link-features--reversed&viewMode=story')

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Link / Accent', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link-features--accent&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Link / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link--default&viewMode=story')

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Link / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-link--default&viewMode=story')

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
