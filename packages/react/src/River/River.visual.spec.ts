/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: River', () => {
  test('River / Left', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river-features--left&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Right', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river-features--right&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Center', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river-features--center&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / 60:40 image ratio', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-features--column-ratio-6040&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / 50:50 image ratio', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-features--column-ratio-5050&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Alternative Heading Level', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-features--alternative-heading-level&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / No Rounded Visual Corners', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-features--no-rounded-visual-corners&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Alternative Heading Size', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-features--alternative-heading-size&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Alternating Layout', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river-features--alternating-layout&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Larger Placeholder Image', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-river--larger-placeholder-image&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('River / Copilot', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-river--copilot&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
