/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: FAQ', () => {
  test('FAQ / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-faq--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FAQ / All Closed', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-faq-features--all-closed&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FAQ / All Open', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-faq-features--all-open&viewMode=story')

    await page.waitForTimeout(1000)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FAQ / Reversed Toggles', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-faq-features--reversed-toggles&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FAQ / Heading Left Aligned', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-faq-features--heading-left-aligned&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FAQ / With Subheadings', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-faq-features--with-subheadings&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FAQ / Groups', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-faq-features--groups&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  // eslint-disable-next-line i18n-text/no-en
  test.describe('Mobile viewport test for Group narrow view (mobile)', () => {
    test.use({viewport: {width: 360, height: 800}})
    test('FAQ / Group narrow view (mobile)', async ({page}) => {
      await page.goto(
        'http://localhost:6006/iframe.html?args=&id=components-faq-features--groups-narrow&viewMode=story',
      )

      await page.waitForTimeout(500)
      expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
    })
  })
  test('FAQ / Dynamic Data Example', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-faq-features--dynamic-data-example&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FAQ / With Prose', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-faq-features--with-prose&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })
})
