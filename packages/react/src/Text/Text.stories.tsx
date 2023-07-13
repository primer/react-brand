import {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import {Text, TextSizes, TextWeights} from '.'
import {Stack} from '../Stack'

export default {
  title: 'Components/Text',
  component: Text,
} as Meta<typeof Text>

const Template: StoryFn<typeof Text> = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Text',
  size: '400',
}

export const Scale: StoryFn<typeof Text> = args => (
  <>
    {TextSizes.map(size => (
      <Text key={size} size={size} {...args}>
        Text {size}
      </Text>
    ))}
  </>
)

Scale.args = {
  as: 'div',
}

export const OverrideWeight = () => (
  <>
    {TextWeights.map(weight => (
      <Text key={weight} as="p" weight={weight} size="500">
        {weight}
      </Text>
    ))}
  </>
)

export const OverrideWeightResponsive = () => (
  <Text
    as="p"
    weight={{
      narrow: 'extrabold',
      regular: 'semibold',
      wide: 'normal',
    }}
  >
    Responsive text weights
  </Text>
)

export const Composition = () => (
  <Text as="p" size="500">
    <Text as="strong" weight="semibold" size="500">
      Registration for our global enterprise event
    </Text>{' '}
    on improving collaboration, security practices, and developer productivity is right around the corner.
  </Text>
)

export const Alignment = () => (
  <Stack direction="vertical">
    <Text as="p">Default</Text>
    <Text as="p" align="start">
      Start
    </Text>
    <Text as="p" align="center">
      Center
    </Text>
    <Text as="p" align="end">
      End
    </Text>
    <Text as="p" align="left">
      Left
    </Text>
    <Text as="p" align="right">
      Right
    </Text>
  </Stack>
)
