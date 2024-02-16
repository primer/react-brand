/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: UnorderedList', () => {
  test('UnorderedList / Check List', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-unorderedlist-features--check-list&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('UnorderedList / X List', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-unorderedlist-features--x-list&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('UnorderedList / Custom Color', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-unorderedlist-features--custom-color&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('UnorderedList / Custom Icon', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-unorderedlist-features--custom-icon&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('UnorderedList / Text Variant', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-unorderedlist-features--text-variant&viewMode=story',
    )

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('UnorderedList / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-unorderedlist--default&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('UnorderedList / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-unorderedlist--playground&viewMode=story')

    await page.waitForTimeout(500)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
