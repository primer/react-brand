/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: CTABanner', () => {
  test('CTABanner / With Border', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-ctabanner-features--with-border&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTABanner / With No Shadow', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-ctabanner-features--with-no-shadow&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTABanner / Aligned Center', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-ctabanner-features--aligned-center&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTABanner / With Trailing Component', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-ctabanner-features--with-trailing-component&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTABanner / Custom Shadow', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-ctabanner-features--custom-shadow&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTABanner / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-ctabanner--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('CTABanner / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-ctabanner--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
