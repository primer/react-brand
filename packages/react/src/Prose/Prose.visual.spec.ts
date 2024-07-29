/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Prose', () => {
  test('Prose / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-prose--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Prose / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-prose--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Prose / Full Width', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-prose-features--full-width&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Narrow view, full width (mobile)', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('Prose / Narrow view, full width (mobile)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-prose-features--narrow-view-full-width&viewMode=story',
      )

      await page.waitForTimeout(500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Tablet viewport test for Regular view, full width (tablet)', () => {
    test.use({viewport: {width: 834, height: 1112}})
    test('Prose / Regular view, full width (tablet)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-prose-features--regular-view-full-width&viewMode=story',
      )

      await page.waitForTimeout(500)
      expect(await page.screenshot()).toMatchSnapshot()
    })
  })
  test('Prose / Unordered List', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-prose-features--unordered-list&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
