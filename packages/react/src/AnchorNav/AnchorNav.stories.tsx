import React from 'react'
import {Meta} from '@storybook/react'
import {AnchorNav} from '.'
import {Heading, Text, Stack, Button} from '../'
import {RedlineBackground} from '../component-helpers'

type MockData = {
  [key: string]: string
}

export default {
  title: 'Components/AnchorNav',
  component: AnchorNav,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta<typeof AnchorNav>

export const Default = () => (
  <AnchorNav>
    <AnchorNav.Link href="#section">Section one</AnchorNav.Link>
    <AnchorNav.Link href="#section">Section two</AnchorNav.Link>
    <AnchorNav.Link href="#section">Section three</AnchorNav.Link>
    <AnchorNav.Link href="#section">Section four</AnchorNav.Link>
    <AnchorNav.Link href="#section">Section five</AnchorNav.Link>
    <AnchorNav.Action href="#">Sign up</AnchorNav.Action>
  </AnchorNav>
)

export const Playground = ({data, sectionHeight, actionText, secondaryAction, secondaryActionText, ...args}) => {
  return (
    <div style={{backgroundColor: 'var(--base-color-scale-red-0)'}}>
      <RedlineBackground height={args.offset}>
        <Stack direction="vertical" gap="none" justifyContent="center" style={{textAlign: 'center'}}>
          <Heading as="h1" size="6">
            Offset {args.offset}px from top
          </Heading>
          <Text as="p" variant="muted" size="200">
            (configure me using Storybook Controls)
          </Text>
        </Stack>
      </RedlineBackground>
      <AnchorNav {...args}>
        {Object.entries(data as MockData).map(([key, value]) => (
          <AnchorNav.Link href={value} key={value}>
            {key}
          </AnchorNav.Link>
        ))}
        <AnchorNav.Action href="#">{actionText}</AnchorNav.Action>
        {secondaryAction && <AnchorNav.SecondaryAction href="#">{secondaryActionText}</AnchorNav.SecondaryAction>}
      </AnchorNav>
      {/**
       *  The following markup is provided for demonstration purposes only.
       *  It is not part of the AnchorNav component.
       */}
      <Stack
        direction="vertical"
        justifyContent="space-around"
        gap="none"
        style={{marginBottom: '100px'}}
        padding="none"
      >
        {Object.entries(data as MockData).map(([key, value]) => (
          <RedlineBackground key={value}>
            <Stack
              key={value}
              id={value}
              direction="vertical"
              alignItems="flex-start"
              style={{
                padding: `${sectionHeight / 2}px var(--base-size-24)`,
              }}
            >
              <Heading>{key}</Heading>
              <Text as="p">
                AnchorNav is a component that allows users to navigate to different sections of a page.
              </Text>
              <Button>Learn More</Button>
            </Stack>
          </RedlineBackground>
        ))}
      </Stack>
    </div>
  )
}
Playground.argTypes = {
  actionText: {
    name: 'text',
    control: {type: 'text'},
    table: {
      category: 'AnchorNav.Action',
    },
  },
  secondaryAction: {
    name: 'visible',
    control: {type: 'boolean'},
    table: {
      category: 'AnchorNav.SecondaryAction',
    },
  },
  secondaryActionText: {
    name: 'text',
    control: {type: 'text'},
    table: {
      category: 'AnchorNav.SecondaryAction',
    },
  },
  data: {
    name: 'Data',
    description: 'Test data',
    control: {
      type: 'object',
    },
    table: {
      category: 'Story customization',
    },
  },
  sectionHeight: {
    name: 'Section height',
    description: 'Section height',
    control: {
      type: 'number',
    },
    table: {
      category: 'Story customization',
    },
  },
  offset: {
    name: 'Offset',
    description: 'Offset from the top of the page',
    control: {
      type: 'number',
    },
    table: {
      category: 'Story customization',
    },
  },
}
Playground.args = {
  hideUntilSticky: false,
  enableDefaultBgColor: false,
  actionText: 'Sign up',
  secondaryAction: false,
  secondaryActionText: 'Learn more',
  data: {
    ['GitHub vs Jenkins']: 'githubvsjenkins',
    ['GitHub vs GitLab']: 'githubvsgitlab',
    ['GitHub vs CircleCI']: 'githubvscircleci',
    ['GitHub vs BitBucket']: 'githubvsvsbitbucket',
    ['GitHub vs TravisCI']: 'githubvsvstravis',
  },
  sectionHeight: 1000,
  offset: 100,
}
