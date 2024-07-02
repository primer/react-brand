import React from 'react'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {Meta, StoryFn} from '@storybook/react'

import {SolutionPage} from './SolutionPage'
import {sharedArgTypes} from '../helpers'

export default {
  title: 'Recipes/Solutions/Solution: Industry',
  component: SolutionPage,
  args: {
    heroVideo: true,
    heroLabel: 'Healthcare',
    heroTitle: 'Empower healthcare development with a secure, AI-powered platform',
    heroDescription:
      'By incorporating AI into developer workflows, you can build secure and optimized communication channel between patient and care providers.',
    heroCtaTextPrimary: 'Start a free trial',
    heroCtaTextSecondary: 'Contact Sales',

    sectionIntroText: 'A single, integrated, enterprise-ready platform',

    introVariant: 'pillars',
    logoBarVisible: false,
    riverVisible: false,
    customerStoryVisible: false,
    testimonialsVisible: false,
    faqVisible: false,
  },
  argTypes: {
    ...sharedArgTypes,
  },
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: 'fullscreen',
  },
} as Meta<typeof SolutionPage>

export const Playground: StoryFn<typeof SolutionPage> = args => <SolutionPage {...args} />
Playground.args = {
  variant: 'industry',

  logoBarVisible: true,
  riverVisible: true,
  customerStoryVisible: true,
  testimonialsVisible: true,
  faqVisible: true,
}

export const Minimum: StoryFn<typeof SolutionPage> = args => <SolutionPage {...args} />
Minimum.args = {
  variant: 'industry',
}

export const Maximum: StoryFn<typeof SolutionPage> = args => <SolutionPage {...args} />
Maximum.args = {
  variant: 'industry',

  logoBarVisible: true,
  riverVisible: true,
  customerStoryVisible: true,
  testimonialsVisible: true,
  faqVisible: true,
}
