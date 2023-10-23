/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: FormControl', () => {
  test('FormControl / w/ TextInput - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--text-input-playground&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FormControl / w/ Textarea - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--textarea-playground&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FormControl / w/ Select - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--select-playground&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FormControl / w/ Checkbox - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--checkbox-playground&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })

  test('FormControl / w/ Radio - Playground', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-forms-formcontrol--radio-playground&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot({fullPage: true})).toMatchSnapshot()
  })
})
