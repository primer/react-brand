/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Card', () => {
  test('Card / CTA Text', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card-features--cta-text&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Label', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card-features--label&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Icon', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card-features--icon&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Icon Colors', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card-features--icon-colors&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Icon (native)', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card-features--with-icon-svg&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Icon And Label', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-card-features--icon-and-label&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Image', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card-features--image&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Image And Label', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-card-features--image-and-label&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Stacked', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card-features--stacked&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Card / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-card--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
