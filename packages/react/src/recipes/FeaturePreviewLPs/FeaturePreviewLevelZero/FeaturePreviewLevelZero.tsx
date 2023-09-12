import React, {useEffect} from 'react'
import {
  Box,
  ColorModesEnum,
  Grid,
  Heading,
  Hero,
  InlineLink,
  MinimalFooter,
  SectionIntro,
  Stack,
  SubdomainNavBar,
  Text,
  ThemeProvider,
} from '../../..'

import {Themes, themeDetailsMap} from '../helpers'
import styles from './FeaturePreviewLevelZero.module.css'

import placeholderImage from '../../../fixtures/images/placeholder-600x400.png'

type FeaturePreviewLevelZeroProps = {
  colorMode?: ColorModesEnum.LIGHT | ColorModesEnum.DARK
  accentColor: Themes
  heroAlign: 'start' | 'center'
  heroVisualPosition: 'block-end' | 'inline-end'
  showHeroVisual: boolean
  heroLabel: string
  heroTitle: string
  heroDescription: string
  heroCtaTextPrimary: string
  heroCtaTextSecondary: string
}

export function FeaturePreviewLevelZero({accentColor, colorMode, ...args}: FeaturePreviewLevelZeroProps) {
  const [enableGridOverlay, setEnableGridOverlay] = React.useState(false)
  const [isLightMode, setIsLightMode] = React.useState(colorMode === ColorModesEnum.LIGHT)
  const selectedColorMode = isLightMode ? ColorModesEnum.LIGHT : ColorModesEnum.DARK
  const accentColorValue = themeDetailsMap[accentColor][selectedColorMode].color

  useEffect(() => {
    setIsLightMode(colorMode === ColorModesEnum.LIGHT)
  }, [colorMode])

  const handleOverlay = e => {
    e.preventDefault()
    setEnableGridOverlay(!enableGridOverlay)
  }

  const handleMode = e => {
    e.preventDefault()
    setIsLightMode(!isLightMode)
  }

  return (
    <ThemeProvider
      colorMode={isLightMode ? 'light' : 'dark'}
      style={{
        ['--brand-Pillar-icon-color-default' as string]: accentColorValue,
        ['--brand-Label-color-default' as string]: accentColorValue,
        ['--brand-color-accent-primary' as string]: accentColorValue,
        backgroundColor: 'var(--brand-color-canvas-default)',
      }}
    >
      <SubdomainNavBar title={`${accentColor.charAt(0).toUpperCase() + accentColor.slice(1)} Preview`} fixed={false}>
        <SubdomainNavBar.SecondaryAction href="#" onClick={handleMode}>
          Change color mode
        </SubdomainNavBar.SecondaryAction>
        <SubdomainNavBar.PrimaryAction href="#" onClick={handleOverlay}>
          {enableGridOverlay ? 'Disable' : 'Enable'} grid
        </SubdomainNavBar.PrimaryAction>
      </SubdomainNavBar>
      <Box
        backgroundColor="subtle"
        className={styles['FeaturePreview__hero']}
        style={{backgroundImage: `url(${themeDetailsMap[accentColor][selectedColorMode].images.heroBg})`}}
        paddingBlockEnd={24}
      >
        <Grid enableOverlay={enableGridOverlay}>
          <Grid.Column>
            <Hero align={args.heroAlign} className={styles.Hero}>
              {args.heroLabel && <Hero.Label>{args.heroLabel}</Hero.Label>}
              {args.heroTitle && <Hero.Heading>{args.heroTitle}</Hero.Heading>}
              {args.heroDescription && <Hero.Description>{args.heroDescription}</Hero.Description>}
              {args.heroCtaTextPrimary && <Hero.PrimaryAction href="#">{args.heroCtaTextPrimary}</Hero.PrimaryAction>}
              {args.heroCtaTextSecondary && (
                <Hero.SecondaryAction href="#">{args.heroCtaTextSecondary}</Hero.SecondaryAction>
              )}
              {args.showHeroVisual && (
                <Hero.Image
                  position={args.heroVisualPosition}
                  src={placeholderImage}
                  alt="placeholder, blank area with an off-white background color"
                  height="100%"
                />
              )}
            </Hero>
          </Grid.Column>
        </Grid>
      </Box>

      <Box paddingBlockStart={96} className={styles['FeaturePreview__contentArea']}>
        <Grid enableOverlay={enableGridOverlay}>
          <Grid.Column>
            <section>
              <Grid enableOverlay={enableGridOverlay}>
                <Grid.Column span={6} start={4}>
                  <Stack padding="none">
                    <SectionIntro fullWidth align={args.heroAlign === 'center' ? 'center' : 'start'}>
                      <SectionIntro.Heading size="5">
                        Signup for this cool feature to enable you to do this before everyone else. Be among the first
                        to learn the latest about our platforms, technologies, and tools.
                      </SectionIntro.Heading>
                    </SectionIntro>
                    <Stack direction="vertical" padding="none">
                      <Text as="p" size="300" variant="muted" align={args.heroAlign === 'center' ? 'center' : 'start'}>
                        It’s often considered polite to tell people what they are about to sign up for. Even if it
                        involves making them read a bunch. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                        sapien sit ullamcorper id. Aliquam luctus sed turpis felis nam pulvinar risus elementum.
                      </Text>
                      <Text as="p" size="300" variant="muted" align={args.heroAlign === 'center' ? 'center' : 'start'}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </Text>
                    </Stack>
                    <Box
                      className={styles.FeaturePreview__borderTop}
                      paddingBlockStart={{narrow: 24, regular: 48}}
                      marginBlockStart={{narrow: 24, regular: 48}}
                      paddingBlockEnd={{narrow: 24, regular: 48}}
                      marginBlockEnd={{narrow: 24, regular: 48}}
                    >
                      <Stack
                        direction="vertical"
                        padding="none"
                        alignItems={args.heroAlign === 'center' ? 'center' : 'flex-start'}
                      >
                        <Heading as="h2" size="subhead-large">
                          Learn more about this
                        </Heading>
                        <Text as="p" align={args.heroAlign === 'center' ? 'center' : 'start'}>
                          Name of this relevant thing: <InlineLink href="#">Lorem ipsum dolor sit amet</InlineLink>
                        </Text>
                        <Text as="p" align={args.heroAlign === 'center' ? 'center' : 'start'}>
                          Name of this relevant thing: <InlineLink href="#">Consectetur adipiscing elit</InlineLink>
                        </Text>
                      </Stack>
                    </Box>
                  </Stack>
                </Grid.Column>
              </Grid>
            </section>
          </Grid.Column>
        </Grid>
      </Box>

      <MinimalFooter>
        <MinimalFooter.Link href="https://github.com/organizations/enterprise_plan">
          Try GitHub for free
        </MinimalFooter.Link>
        <MinimalFooter.Link href="https://github.com/enterprise">Enterprise</MinimalFooter.Link>
        <MinimalFooter.Link href="https://github.com/enterprise/contact">Email us</MinimalFooter.Link>
      </MinimalFooter>
      {enableGridOverlay && (
        <Grid
          enableOverlay={enableGridOverlay}
          style={{
            zIndex: 1,
            position: 'fixed',
            top: 0,
            left: '50%',
            transform: 'translate(-50%, 0)',
            maxWidth: '1280px',
            bottom: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
          <Grid.Column span={1}></Grid.Column>
        </Grid>
      )}
    </ThemeProvider>
  )
}
