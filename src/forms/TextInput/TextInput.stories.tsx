import React from 'react'
import {ComponentMeta, ComponentStory} from '@storybook/react'
import {TextInput} from '.'
import {CheckIcon, SearchIcon} from '@primer/octicons-react'

export default {
  title: 'Components/Forms/TextInput',
  component: TextInput,
  argTypes: {
    size: {
      options: [0, 1],
      mapping: ['medium', 'large'],
      control: {
        type: 'inline-radio',
        labels: ['medium', 'large']
      },
      table: {
        category: 'Input'
      }
    },
    validationStatus: {
      options: [0, 1, 2, 3], // iterator
      mapping: [undefined, 'error', 'success', 'warning'], // values
      control: {
        type: 'inline-radio',
        labels: ['undefined', 'error', 'success', 'warning']
      },
      table: {
        category: 'Validation'
      }
    },
    fullWidth: {
      description: 'formerly called Block',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },

    monospace: {
      description: 'monospace text',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    inset: {
      description: 'formerly called Contrast',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    disabled: {
      description: 'disabled field',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    required: {
      description: 'required field',
      control: {type: 'boolean'},
      table: {
        category: 'Input'
      }
    },
    placeholder: {
      type: 'string',
      name: 'placeholder',
      description: 'string',
      table: {
        category: 'Input'
      }
    },
    leadingVisual: {
      control: {type: 'boolean'},
      name: 'Leading visual',
      description: 'Octicon',
      table: {
        category: 'Input'
      }
    },
    trailingVisual: {
      control: {type: 'boolean'},
      name: 'Trailing visual',
      description: 'Octicon',
      table: {
        category: 'Input'
      }
    }
  }
} as ComponentMeta<typeof TextInput>

const Template: ComponentStory<typeof TextInput> = args => (
  <TextInput
    aria-label="Standalone text input"
    {...args}
    leadingVisual={args.leadingVisual ? CheckIcon : undefined}
    trailingVisual={args.trailingVisual ? SearchIcon : undefined}
  />
)

export const Default = Template.bind({})
