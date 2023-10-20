/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Radio', () => {
  test('Radio / w/ labels', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-radio-features--with-form-control&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('Radio / Inactive', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-radio-features--inactive&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('Radio / On Custom Background Color', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-radio-features--on-custom-background-color&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('Radio / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-forms-radio--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })
})
