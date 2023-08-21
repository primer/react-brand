import {ZapIcon} from '@primer/octicons-react'
import React, {useEffect} from 'react'
import {
  AnimationProvider,
  Box,
  Button,
  CTABanner,
  ColorModesEnum,
  FAQ,
  Grid,
  Heading,
  Hero,
  Image,
  Link,
  MinimalFooter,
  Pillar,
  River,
  RiverBreakout,
  SectionIntro,
  SubdomainNavBar,
  Testimonial,
  Text,
  ThemeProvider,
  Timeline,
} from '../../../'

import styles from './FeaturePreviewLevelTwo.module.css'

import emptyBrowser from '../fixtures/images/fg/empty-browser.png'
import emptyBrowserDark from '../fixtures/images/fg/empty-browser-dark.png'

import emptyBrowserLightFull from '../fixtures/images/fg/empty-browser-full-light.png'
import emptyBrowserDarkFull from '../fixtures/images/fg/empty-browser-full-dark.png'

import {Themes, themeDetailsMap} from '../helpers'

type FeaturePreviewLevelZeroProps = {
  colorMode?: ColorModesEnum.LIGHT | ColorModesEnum.DARK
  accentColor: Themes
}
export function FeaturePreviewLevelTwo({accentColor, colorMode}: FeaturePreviewLevelZeroProps) {
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
      colorMode={selectedColorMode}
      style={{
        ['--brand-Testimonial-quoteMarkColor-default' as string]: accentColorValue,
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
      <AnimationProvider>
        <div className={styles.FeaturePreview}>
          <Grid enableOverlay={enableGridOverlay}>
            <Grid.Column>
              <Hero
                className={styles.Hero}
                imageContainerClassName={styles.FeaturePreview__heroImageContainer}
                imageContainerStyle={{
                  backgroundImage: `url(${themeDetailsMap[accentColor][selectedColorMode].images.heroVisualBg})`,
                }}
              >
                <Hero.Label>Label</Hero.Label>
                <Hero.Heading>Expressive headline about a sweet feature</Hero.Heading>
                <Hero.Description>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam luctus
                  sed turpis felis nam pulvinar.
                </Hero.Description>
                <Hero.PrimaryAction href="#">Primary CTA</Hero.PrimaryAction>
                <Hero.SecondaryAction href="#">Secondary CTA</Hero.SecondaryAction>
                <Hero.Image
                  src={isLightMode ? emptyBrowser : emptyBrowserDark}
                  alt="placeholder, blank area with an off-white background color"
                />
              </Hero>
              <section>
                <Grid enableOverlay={enableGridOverlay}>
                  <Grid.Column span={9}>
                    <Box marginBlockEnd={64}>
                      <SectionIntro fullWidth>
                        <SectionIntro.Heading>
                          <em>Here we explain why this came to be.</em> This is a short statement about the intention of
                          the feature and why we think it&apos;s cool, keep it real.
                        </SectionIntro.Heading>
                      </SectionIntro>
                    </Box>
                  </Grid.Column>
                </Grid>
                <Box
                  marginBlockEnd={{
                    narrow: 24,
                    regular: 64,
                    wide: 112,
                  }}
                >
                  <Grid enableOverlay={enableGridOverlay}>
                    <Grid.Column span={{medium: 4}}>
                      <Pillar animate="slide-in-right">
                        <Pillar.Icon icon={ZapIcon} />
                        <Pillar.Heading>
                          Here is a core value proposition of this new feature on one or two lines
                        </Pillar.Heading>
                        <Pillar.Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id aliquam
                          luctus sed turpis.
                        </Pillar.Description>
                      </Pillar>
                    </Grid.Column>
                    <Grid.Column span={{medium: 4}}>
                      <Pillar animate="slide-in-right">
                        <Pillar.Icon icon={ZapIcon} />
                        <Pillar.Heading>Bam, another value proposition of this neat new feature</Pillar.Heading>
                        <Pillar.Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id aliquam
                          luctus sed turpis.
                        </Pillar.Description>
                      </Pillar>
                    </Grid.Column>
                    <Grid.Column span={{medium: 4}}>
                      <Pillar animate="slide-in-right">
                        <Pillar.Icon icon={ZapIcon} />
                        <Pillar.Heading>
                          And - Boom - yet a third value proposition of this neat new feature
                        </Pillar.Heading>
                        <Pillar.Description>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id aliquam
                          luctus sed turpis.
                        </Pillar.Description>
                      </Pillar>
                    </Grid.Column>
                  </Grid>
                </Box>
              </section>

              <River align="end">
                <River.Visual
                  className={styles.FeaturePreview__heroImageContainer}
                  style={{
                    backgroundImage: `url(${themeDetailsMap[accentColor][selectedColorMode].images.riverVisualBgs[0]})`,
                  }}
                >
                  <Image
                    src={isLightMode ? emptyBrowserLightFull : emptyBrowserDarkFull}
                    alt="placeholder, blank area with an off-white background color"
                  />
                </River.Visual>
                <River.Content className={styles.RiverContent} animate="slide-in-left">
                  <Heading>
                    Dive into the first sub <br />
                    feature with a river
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                    luctus sed turpis felis nam pulvinar risus elementum.
                  </Text>
                  <Link href="#">Learn more</Link>
                </River.Content>
              </River>
              {/* TODO REPLACE WITH RIVER BREAKOUT */}

              <Grid as="section">
                <Grid.Column span={12}>
                  <RiverBreakout>
                    <RiverBreakout.A11yHeading>
                      An accessible heading describing the subsequent content
                    </RiverBreakout.A11yHeading>
                    <RiverBreakout.Visual
                      className={styles.FeaturePreview__heroImageContainer}
                      style={{
                        backgroundImage: `url(${themeDetailsMap[accentColor][selectedColorMode].images.heroVisualBg})`,
                      }}
                    >
                      <Image
                        src={isLightMode ? emptyBrowserLightFull : emptyBrowserDarkFull}
                        alt="placeholder, blank area with an off-white background color"
                      />
                    </RiverBreakout.Visual>
                    <RiverBreakout.Content
                      animate="slide-in-right"
                      trailingComponent={() => (
                        <Box animate="slide-in-down">
                          <Timeline fullWidth>
                            <Timeline.Item>
                              <em>This is what it is and it&apos;s great. </em>That&apos;s why and how the greatness
                              happens here, we love sub bullets, they allow for more specific technical details.
                            </Timeline.Item>
                            <Timeline.Item>
                              <em>This is what it is and it&apos;s great. </em>That&apos;s why and how the greatness
                              happens here, we love sub bullets, they allow for more specific technical details.
                            </Timeline.Item>
                          </Timeline>
                        </Box>
                      )}
                    >
                      <Text>
                        <em>Here we explain why this came to be.</em> This is a short statement about the intention of
                        the feature and why we think it&apos;s cool, keep it real.
                      </Text>
                      <Link href="#">Learn more</Link>
                    </RiverBreakout.Content>
                  </RiverBreakout>
                </Grid.Column>
              </Grid>
              <River align="end">
                <River.Visual
                  className={styles.FeaturePreview__heroImageContainer}
                  style={{
                    backgroundImage: `url(${themeDetailsMap[accentColor][selectedColorMode].images.riverVisualBgs[1]})`,
                  }}
                >
                  <Image
                    src={isLightMode ? emptyBrowserLightFull : emptyBrowserDarkFull}
                    alt="placeholder, blank area with an off-white background color"
                  />
                </River.Visual>
                <River.Content className={styles.RiverContent} animate="slide-in-left">
                  <Heading>
                    Dive into the second sub <br />
                    feature with a river
                  </Heading>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                    luctus sed turpis felis nam pulvinar risus elementum.
                  </Text>
                  <Link href="#">Learn more</Link>
                </River.Content>
              </River>
            </Grid.Column>
          </Grid>
          <Box
            backgroundColor="subtle"
            paddingBlockStart={128}
            paddingBlockEnd={128}
            className={styles['FeaturePreview__trailingSection']}
          >
            <Grid enableOverlay={enableGridOverlay}>
              <Grid.Column start={2} span={10}>
                <Box marginBlockEnd={128}>
                  <Testimonial size="large" quoteMarkColor="default">
                    <Testimonial.Quote>
                      We&apos;ve used GitHub from the inception of Datadog. It&apos;s a high-quality product, and a lot
                      of our engineers contribute to open source so there&apos;s a sense of community there. GitHub is
                      ingrained in the DNA of our engineering, it&apos;s become part of the culture.”
                    </Testimonial.Quote>
                    <Testimonial.Name position="Staff Software Engineer">David Ross</Testimonial.Name>
                  </Testimonial>
                </Box>
              </Grid.Column>
              <Grid.Column>
                <CTABanner
                  className={styles.FeaturePreview__ctaBanner}
                  align="center"
                  hasShadow={false}
                  hasBackground={false}
                  style={{
                    backgroundImage: `url(${themeDetailsMap[accentColor][selectedColorMode].images.ctaBannerBg})`,
                  }}
                >
                  <CTABanner.Heading>Get it, it&apos;s super nice</CTABanner.Heading>
                  <CTABanner.Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                    luctus sed turpis felis nam pulvinar.
                  </CTABanner.Description>
                  <CTABanner.ButtonGroup>
                    <Button>Primary Action</Button>
                    <Button>Secondary Action</Button>
                  </CTABanner.ButtonGroup>
                </CTABanner>
              </Grid.Column>
              <Grid.Column>
                <Box marginBlockStart={128}>
                  <FAQ>
                    <FAQ.Heading>Frequently asked questions</FAQ.Heading>
                    <FAQ.Item>
                      <FAQ.Question>What is this feature?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                    <FAQ.Item>
                      <FAQ.Question>When is it release planned?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                    <FAQ.Item>
                      <FAQ.Question>Where is it available?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                    <FAQ.Item>
                      <FAQ.Question>Who is it for?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                    <FAQ.Item>
                      <FAQ.Question>What can I expect?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                    <FAQ.Item>
                      <FAQ.Question>What&apos;s the difference between this & that?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                    <FAQ.Item>
                      <FAQ.Question>Is this free?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                    <FAQ.Item>
                      <FAQ.Question>Is this release invite-only?</FAQ.Question>
                      <FAQ.Answer>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam
                          luctus sed turpis felis nam pulvinar risus elementum.
                        </p>
                      </FAQ.Answer>
                    </FAQ.Item>
                  </FAQ>
                </Box>
              </Grid.Column>
            </Grid>
          </Box>
        </div>
      </AnimationProvider>
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
