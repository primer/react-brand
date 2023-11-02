/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: EyebrowBanner', () => {
  test('EyebrowBanner / Variations', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner-features--variations&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / On Custom Background Dark', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner-features--on-custom-background-dark&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / On Custom Background Light', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner-features--on-custom-background-light&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / Labels', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner-features--labels&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / Labels Dark', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner-features--labels-dark&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / Icons', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner-features--icons&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / Icons Dark', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner-features--icons-dark&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('EyebrowBanner / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-eyebrowbanner--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
