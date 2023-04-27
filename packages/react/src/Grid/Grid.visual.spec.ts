/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Grid', () => {
  test('Grid / Asymmetry', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid-features--asymmetry&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Nesting', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid-features--nesting&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Responsive', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid-features--responsive&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Centering', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid-features--centering&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Ratio: 50:50', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid-features--fifty-fifty&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Ratio: 60:40', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid-features--sixty-forty&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Ratio: 40:60', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid-features--forty-sixty&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Grid / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-grid--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
