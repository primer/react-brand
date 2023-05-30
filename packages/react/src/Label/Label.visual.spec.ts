/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Label', () => {
  test('Label / Small', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-label-features--small&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / Large', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-label-features--large&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / Color', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-label-features--color&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / Leading visual (native)', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-label-features--with-leading-visual-svg&viewMode=story',
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / With an Octicon', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-label-features--with-octicon&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / With an Octicon (large)', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-label-features--with-octicon-large&viewMode=story',
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / With an Octicon and color', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-label-features--with-octicon-color&viewMode=story',
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-label--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Label / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-label--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
