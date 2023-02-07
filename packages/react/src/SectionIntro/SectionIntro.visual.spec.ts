/*
 * Do not modify this file directly.
 * This file was generated by: playwright.generate-tests.ts.
 * Regenerate using: npm run test:visual:generate
 */
import {test, expect} from '@playwright/test'

// eslint-disable-next-line i18n-text/no-en
test.describe('Visual Comparison: SectionIntro', () => {
  test('SectionIntro / Heading Only', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-sectionintro-features--heading-only&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SectionIntro / With Description', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-sectionintro-features--with-description&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SectionIntro / With Action', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-sectionintro-features--with-action&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SectionIntro / With Secondary Action', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-sectionintro-features--with-secondary-action&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SectionIntro / Aligned Center', async ({page}) => {
    await page.goto(
      'http://localhost:6006/iframe.html?args=&id=components-sectionintro-features--aligned-center&viewMode=story'
    )

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SectionIntro / Playground', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-sectionintro--playground&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })

  test('SectionIntro / Default', async ({page}) => {
    await page.goto('http://localhost:6006/iframe.html?args=&id=components-sectionintro--default&viewMode=story')

    expect(await page.screenshot()).toMatchSnapshot()
  })
})
