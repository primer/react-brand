import {Meta, StoryFn} from '@storybook/react'
import {fn} from '@storybook/test'
import React from 'react'
import posterImage from '../fixtures/images/example-poster.png'
import {VideoPlayer} from '.'

export default {
  title: 'Components/VideoPlayer',
  component: VideoPlayer,
  args: {
    poster: posterImage,
    title: 'GitHub media player',
    branding: true,
    onPlay: fn(),
    onPause: fn(),
    onEnded: fn(),
    onSeeked: fn(),
    onVolumeChange: fn(),
    onLoadedMetadata: fn(),
    onPlaying: fn(),
    onTimeUpdate: fn(),
  },
  argTypes: {
    poster: {
      type: 'string',
      description: 'Specify the URL of the poster image',
    },
    title: {
      type: 'string',
      description: 'Specify the title of the video',
    },
    visuallyHiddenTitle: {
      type: 'boolean',
    },
    showBranding: {
      type: 'boolean',
    },
  },
} as Meta<typeof VideoPlayer>

export const Playground: StoryFn<typeof VideoPlayer> = args => (
  <VideoPlayer {...args}>
    <VideoPlayer.Source src="https://primer.github.io/brand/assets/example.mp4" type="video/mp4" />
    <VideoPlayer.Track src="https://primer.github.io/brand/assets/example.vtt" default />
  </VideoPlayer>
)

export const Default = Playground.bind({})
