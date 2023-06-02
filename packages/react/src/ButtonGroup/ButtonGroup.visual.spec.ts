/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: ButtonGroup', () => {
  test('ButtonGroup / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-buttongroup--playground&viewMode=story')

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('ButtonGroup / Single Button Group', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-buttongroup--single-button-group&viewMode=story',
    )

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('ButtonGroup / Large Button Group', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-buttongroup--large-button-group&viewMode=story',
    )

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('ButtonGroup / Link Button Group', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-buttongroup--link-button-group&viewMode=story',
    )

    await page.waitForTimeout(400)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
