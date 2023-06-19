/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: Image', () => {
  test('Image / Custom Picture Aspect Ratio', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-image-features--custom-picture-aspect-ratio&viewMode=story',
    )

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Custom Image Aspect Ratio', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-image-features--custom-image-aspect-ratio&viewMode=story',
    )

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Custom Image Height', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-image-features--custom-image-height&viewMode=story',
    )

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Custom Image Width', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-image-features--custom-image-width&viewMode=story',
    )

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Custom Image Width And Height', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-image-features--custom-image-width-and-height&viewMode=story',
    )

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Custom Class', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-image-features--custom-class&viewMode=story')

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Custom Class On Picture', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-image-features--custom-class-on-picture&viewMode=story',
    )

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Custom Class With Aspect Ratio', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-image-features--custom-class-with-aspect-ratio&viewMode=story',
    )

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-image--playground&viewMode=story')

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('Image / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-image--default&viewMode=story')

    await page.waitForTimeout(1000)
    expect(await page.screenshot()).toMatchSnapshot()
  })
})
