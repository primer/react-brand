/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Hero', () => {
  test('Hero / Centered', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-hero-features--centered&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Hero / Without Description', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-hero-features--without-description&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Hero / With Secondary Action', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-hero-features--with-secondary-action&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Hero / Codespaces', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-hero-features--codespaces&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Hero / Issues', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-hero-features--issues&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Hero / With Custom Classnames', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-hero-features--with-custom-classnames&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Hero / With custom icon and variant', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-hero-features--with-custom-icon-and-variant&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Narrow View', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('Hero / Narrow View', async ({page}) => {
      await page.goto('http://localhost:6006/iframe.html?args=&id=components-hero-features--narrow-view&viewMode=story')

      await page.waitForTimeout(500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Narrow View Centered', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('Hero / Narrow View Centered', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-hero-features--narrow-view-centered&viewMode=story',
      )

      await page.waitForTimeout(500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })
  test('Hero / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-hero--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
