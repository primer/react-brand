import React from 'react'
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport'
import {Meta, StoryFn} from '@storybook/react'

import {FeaturePreviewLevelOne} from './FeaturePreviewLevelOne'
import {FeaturePreviewLevelTwoConfigurable} from './FeaturePreviewLevelTwo'
import {FeaturePreviewLevelZero} from './FeaturePreviewLevelZero'
import {themeDetailsMap} from './helpers'
import {ColorModesEnum} from '../../ThemeProvider'

export default {
  title: 'Templates/Feature previews/Configurable',
  component: FeaturePreviewLevelOne,
  parameters: {
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    layout: 'fullscreen',
  },
  args: {
    colorMode: ColorModesEnum.LIGHT,
    accentColor: 'ai',
    heroAlign: 'start',
    showHeroVisual: true,
    heroLabel: 'Label',
    heroTitle: 'Expressive headline about a sweet feature',
    heroDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam luctus sed turpis felis nam pulvinar.',
    heroCtaTextPrimary: 'Primary CTA',
    heroCtaTextSecondary: 'Secondary CTA',

    sectionIntroAlign: 'start',
    sectionIntroVisible: true,
    sectionIntroText: `Here we explain why this came to be. This is a short statement about the intention
    of the feature and why we think it's cool, keep it real.`,

    pillarVisibile: true,
    pillarQuantity: 3,

    riverOneVisible: true,
    riverOneType: 'end',
    riverOneTitle: 'Dive into the first sub feature with a river',
    riverOneDescription:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sapien sit ullamcorper id. Aliquam luctus sed turpis felis nam pulvinar.',
    riverOneCtaText: 'Learn more',

    riverTwoVisible: true,
    riverTwoType: 'breakout',
    riverTwoTitle: 'Dive into the first sub feature with a river',
    riverTwoDescription:
      'Here we explain why this came to be. This is a short statement about the intention of the feature and why we think its cool, keep it real.',
    riverTwoCtaText: 'Learn more',

    riverThreeVisible: true,
    riverThreeType: 'end',
    riverThreeTitle: 'Dive into the first sub feature with a river',
    riverThreeDescription:
      'Here we explain why this came to be. This is a short statement about the intention of the feature and why we think its cool, keep it real.',
    riverThreeCtaText: 'Learn more',
  },
  argTypes: {
    colorMode: {
      name: 'mode',
      control: 'inline-radio',
      options: [ColorModesEnum.LIGHT, ColorModesEnum.DARK],
      table: {
        category: 'Theming',
      },
    },
    accentColor: {
      name: 'theme',
      control: 'radio',
      options: Object.keys(themeDetailsMap),
      table: {
        category: 'Theming',
      },
    },
    /**
     * Hero
     */
    heroAlign: {
      control: 'inline-radio',
      options: ['start', 'center'],
      name: 'align',
      table: {
        category: 'Section: Hero',
      },
    },
    showHeroVisual: {
      control: 'boolean',
      name: 'show visual',
      table: {
        category: 'Section: Hero',
      },
    },
    heroLabel: {
      control: 'text',
      name: 'label',
      table: {
        category: 'Section: Hero',
      },
    },
    heroTitle: {
      control: 'text',
      name: 'title',
      table: {
        category: 'Section: Hero',
      },
    },
    heroDescription: {
      control: 'text',
      name: 'description',
      table: {
        category: 'Section: Hero',
      },
    },
    heroCtaTextPrimary: {
      control: 'text',
      name: 'primary CTA text',
      table: {
        category: 'Section: Hero',
      },
    },
    heroCtaTextSecondary: {
      control: 'text',
      name: 'secondary CTA text',
      table: {
        category: 'Section: Hero',
      },
    },
    /**
     * Section intro
     */
    sectionIntroAlign: {
      control: 'inline-radio',
      options: ['start', 'center'],
      name: 'align',
      table: {
        category: 'Section: Intro',
      },
    },
    sectionIntroText: {
      control: 'text',
      name: 'text',
      table: {
        category: 'Section: Intro',
      },
    },
    sectionIntroVisible: {
      control: 'boolean',
      name: 'visible',
      table: {
        category: 'Section: Intro',
      },
    },
    /**
     * Pillars
     */
    pillarVisibile: {
      control: 'boolean',
      name: 'visible',
      table: {
        category: 'Section: Pillars',
      },
    },
    pillarQuantity: {
      control: 'number',
      name: 'quantity',
      table: {
        category: 'Section: Pillars',
      },
    },

    /**
     * River one
     */
    riverOneVisible: {
      control: 'boolean',
      name: 'river 1 visible',
      table: {
        category: 'Section: Rivers (1)',
      },
    },
    riverOneType: {
      control: 'inline-radio',
      options: ['center', 'start', 'end', 'breakout'],
      name: 'river 1 type',
      table: {
        category: 'Section: Rivers (1)',
      },
    },
    riverOneTitle: {
      control: 'text',
      name: 'river 1 title',
      table: {
        category: 'Section: Rivers (1)',
      },
    },
    riverOneDescription: {
      control: 'text',
      name: 'river 1 description',
      table: {
        category: 'Section: Rivers (1)',
      },
    },
    riverOneCtaText: {
      control: 'text',
      name: 'river 1 CTA text',
      table: {
        category: 'Section: Rivers (1)',
      },
    },

    /**
     * River two
     */
    riverTwoVisible: {
      control: 'boolean',
      name: 'river 2 visible',
      table: {
        category: 'Section: Rivers (2)',
      },
    },
    riverTwoType: {
      control: 'inline-radio',
      options: ['center', 'start', 'end', 'breakout'],
      name: 'river 2 type',
      table: {
        category: 'Section: Rivers (2)',
      },
    },
    riverTwoTitle: {
      control: 'text',
      name: 'river 2 title',
      table: {
        category: 'Section: Rivers (2)',
      },
    },
    riverTwoDescription: {
      control: 'text',
      name: 'river 2 description',
      table: {
        category: 'Section: Rivers (2)',
      },
    },
    riverTwoCtaText: {
      control: 'text',
      name: 'river 2 CTA text',
      table: {
        category: 'Section: Rivers (2)',
      },
    },

    /**
     * River three
     */
    riverThreeVisible: {
      control: 'boolean',
      name: 'river 3 visible',
      table: {
        category: 'Section: Rivers (3)',
      },
    },
    riverThreeType: {
      control: 'inline-radio',
      options: ['center', 'start', 'end', 'breakout'],
      name: 'river 3 type',
      table: {
        category: 'Section: Rivers (3)',
      },
    },
    riverThreeTitle: {
      control: 'text',
      name: 'river 3 title',
      table: {
        category: 'Section: Rivers (3)',
      },
    },
    riverThreeDescription: {
      control: 'text',
      name: 'river 3 description',
      table: {
        category: 'Section: Rivers (3)',
      },
    },
    riverThreeCtaText: {
      control: 'text',
      name: 'river 3 CTA text',
      table: {
        category: 'Section: Rivers (3)',
      },
    },
  },
} as Meta<typeof FeaturePreviewLevelOne>

export const LevelZero: StoryFn<typeof FeaturePreviewLevelZero> = args => (
  <FeaturePreviewLevelZero accentColor={args.accentColor} colorMode={args.colorMode} />
)

LevelZero.storyName = 'Level 0'

export const LevelOne: StoryFn<typeof FeaturePreviewLevelOne> = args => (
  <FeaturePreviewLevelOne accentColor={args.accentColor} colorMode={args.colorMode} />
)

LevelOne.storyName = 'Level 1'

export const LevelTwo: StoryFn<typeof FeaturePreviewLevelTwoConfigurable> = args => (
  <FeaturePreviewLevelTwoConfigurable {...args} />
)

LevelTwo.storyName = 'Level 2'
