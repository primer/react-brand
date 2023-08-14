import React from 'react'
import {StoryFn, Meta} from '@storybook/react'

import {Timeline} from '.'

export default {
  title: 'Components/Timeline/features',
  component: Timeline,
} as Meta<typeof Timeline>

export const WithEmphasis: StoryFn<typeof Timeline> = () => {
  return (
    <Timeline>
      <Timeline.Item>
        <em>GitHub Codespaces</em> offers a complete dev environment in seconds, so you can code, build, test, and open
        pull requests from any repo anywhere.
      </Timeline.Item>
      <Timeline.Item>
        <em>GitHub Copilot</em> is your AI pair programmer that empowers you to complete tasks 55% faster by turning
        natural language prompts into coding suggestions.
      </Timeline.Item>
      <Timeline.Item>
        <em>GitHub Actions</em> automates your build, test, and deployment workflow with simple and secure CI/CD.
      </Timeline.Item>
    </Timeline>
  )
}
