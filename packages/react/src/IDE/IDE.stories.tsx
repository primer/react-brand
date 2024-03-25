import {Meta, StoryFn} from '@storybook/react'
import React from 'react'
import {IDE, IDEChatMessage, IDEEditorFile} from './IDE'

import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import python from 'highlight.js/lib/languages/python'
import {Button} from '../Button'

import './IDE.stories.hljs.theme.css'

import storyStyles from './IDE.stories.module.css'
import {ThemeProvider} from '../ThemeProvider'
import {Box} from '../Box'
import {Stack} from '../Stack'
import {FormControl, TextInput} from '../forms'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('python', python)

export default {
  title: 'Components/IDE',
  component: IDE,
  decorators: [
    Story => (
      <>
        <link rel="stylesheet" href="https://unpkg.com/highlight.js@11.9.0/styles/default.css" />
        <Story />
      </>
    ),
  ],
} as Meta<typeof IDE>

const chatScript: IDEChatMessage[] = [
  {
    role: 'user',
    handle: 'monalisa',
    avatar: 'https://github.com/mona.png',
    message: 'How do I concatenate two arrays in JavaScript?',
  },
  {
    role: 'assistant',
    handle: 'GitHub Copilot',
    avatar: 'https://github.com/copilot.png',
    message: "To concatenate two arrays in JavaScript, you can use the `concat` method. Here's an example:",
    codeSnippet: hljs.highlight(
      'const array1 = [1, 2, 3];\nconst array2 = [4, 5, 6];\nconst resultArray = array1.concat(array2);\nconsole.log(resultArray); // Output: [1, 2, 3, 4, 5, 6]',
      {language: 'javascript'},
    ).value,
    highlighter: 'hljs',
  },
  {
    role: 'user',
    handle: 'monalisa',
    avatar: 'https://github.com/mona.png',
    message: 'Thanks! How do I check if a variable is an array?',
  },
  {
    role: 'assistant',
    handle: 'GitHub Copilot',
    avatar: 'https://github.com/copilot.png',
    message: "You can use the `Array.isArray()` method to check if a variable is an array. Here's an example:",
    codeSnippet: hljs.highlight(
      "const myVariable = [1, 2, 3];\nif (Array.isArray(myVariable)) {\n  console.log('It is an array!');\n} else {\n  console.log('It is not an array.');\n}",
      {language: 'javascript'},
    ).value,
    highlighter: 'hljs',
  },
  {
    role: 'user',
    handle: 'monalisa',
    avatar: 'https://github.com/mona.png',
    message: 'How do I remove a specific element from an array?',
  },
  {
    role: 'assistant',
    handle: 'GitHub Copilot',
    avatar: 'https://github.com/copilot.png',
    message: "You can use the `filter` method to remove a specific element from an array. Here's an example:",
    codeSnippet: hljs.highlight(
      'const array = [1, 2, 3, 4, 5];\nconst elementToRemove = 3;\nconst filteredArray = array.filter(item => item !== elementToRemove);\nconsole.log(filteredArray); // Output: [1, 2, 4, 5]',
      {language: 'javascript'},
    ).value,
    highlighter: 'hljs',
  },
  {
    role: 'user',
    handle: 'monalisa',
    avatar: 'https://github.com/mona.png',
    message: 'How do I convert a string to a number?',
  },
  {
    role: 'assistant',
    handle: 'GitHub Copilot',
    avatar: 'https://github.com/copilot.png',
    message:
      "You can use the `Number` function or the `parseFloat`/`parseInt` functions to convert a string to a number. Here's an example:",
    codeSnippet: hljs.highlight(
      "const string = '123';\nconst number = Number(string);\nconsole.log(number); // Output: 123",
      {language: 'javascript'},
    ).value,
    highlighter: 'hljs',
  },
  {
    role: 'user',
    handle: 'monalisa',
    avatar: 'https://github.com/mona.png',
    message: 'How do I create a function in JavaScript?',
  },
  {
    role: 'assistant',
    handle: 'GitHub Copilot',
    avatar: 'https://github.com/copilot.png',
    message: "You can declare a function using the `function` keyword. Here's an example:",
    codeSnippet: hljs.highlight(
      "function greet(name) {\n  console.log('Hello, ' + name + '!');\n}\ngreet('Alice'); // Output: Hello, Alice!",
      {language: 'javascript'},
    ).value,
    highlighter: 'hljs',
  },
]

const files: IDEEditorFile[] = [
  {
    name: 'sentiments.ts',
    animatedLineStart: 5,
    suggestedLineStart: 10,
    code: `import { fetch } from "fetch-h2";
  
async function isPositive(text: string): Promise<boolean> {
  const response = await fetch(...)
  const drawScatterplot = (data, height, width) => {
    const svg = d3.select("#scatterplot")
      .append("svg")
      .attr("height", height)
      .attr("width", width)
    svg.selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", 5)
  }
  const json = await response.json();
  return json.label === "pos";
}`
      .split('\n')
      .map(line => hljs.highlight(line, {language: 'javascript'}).value),
    highlighter: 'hljs',
  },
  {
    name: 'draw_scatterplot.js',
    code: `import d3 from "d3"
const drawScatterplot = (data, height, width) => {
  const svg = d3.select("#scatterplot")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", d => d.x)
    .attr("cy", d => d.y)
    .attr("r", 5)
}`
      .split('\n')
      .map(line => hljs.highlight(line, {language: 'javascript'}).value),
    highlighter: 'hljs',
  },

  {
    name: 'parse_expenses.py',
    suggestedLineStart: 2,
    code: hljs.highlight(
      `import datetime

def parse_expenses(expenses_string):
"""Parse the list of expenses and return the list of triples (date, value, currency).
Ignore lines starting with #.
Parse the date using datetime.
Example expenses_string:
2016-01-02 -34.01 USD
2016-01-03 2.59 DKK
2016-01-03 -2.72 EUR
"""
expenses = []
for line in expenses_string.splitlines():
if line.startswith("#"):
continue
date, value, currency = line.split(" ")
expenses.append((datetime.datetime.strptime(date, "%Y-%m-%d"),
          float(value),
          currency))
return expenses`,
      {language: 'python'},
    ).value,
    highlighter: 'hljs',
  },
]

const Template: StoryFn<typeof IDE> = args => {
  const [animationPlaying, setAnimationPlaying] = React.useState(false)
  const handleReplay = () => {
    setAnimationPlaying(prev => !prev)
  }

  return (
    <>
      <IDE {...args}>
        {/* <IDE.ActivityBar></IDE.ActivityBar> */}
        <IDE.Chat script={chatScript}></IDE.Chat>
        <IDE.Editor size="large" activeTab={0} files={files} triggerAnimation={animationPlaying} />
      </IDE>
      <Button onClick={handleReplay}>Replay editor animation</Button>
    </>
  )
}

export const Default = Template.bind({})

export const EditorOnly = args => {
  const [animationPlaying, setAnimationPlaying] = React.useState(false)
  const handleReplay = () => {
    setAnimationPlaying(prev => !prev)
  }

  return (
    <>
      <IDE {...args}>
        <IDE.Editor size="large" activeTab={0} files={files} triggerAnimation={animationPlaying} />
      </IDE>
      <Button onClick={handleReplay}>Replay editor animation</Button>
    </>
  )
}

export const ChatOnly = args => {
  return (
    <IDE {...args}>
      <IDE.Chat script={chatScript}></IDE.Chat>
    </IDE>
  )
}

export const VFX = args => {
  const [animationPlaying, setAnimationPlaying] = React.useState(false)
  const [perspective, setPerspective] = React.useState(220)
  const [rotate, setRotate] = React.useState(2)
  const [rotateY, setRotateY] = React.useState(-4)

  const handleReplay = () => {
    setAnimationPlaying(prev => !prev)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    switch (name) {
      case 'perspective':
        setPerspective(Number(value))
        break
      case 'rotate':
        setRotate(Number(value))
        break
      case 'rotateY':
        setRotateY(Number(value))
        break
    }
  }

  return (
    <>
      <IDE
        {...args}
        className={storyStyles.vfx}
        style={{transform: `perspective(${perspective}px) rotate(${rotate}deg) rotateY(${rotateY}deg)`}}
      >
        <IDE.Editor size="large" activeTab={0} files={files} triggerAnimation={animationPlaying} />
      </IDE>
      <Box marginInlineStart={48}>
        <Stack direction="vertical" gap={48} alignItems="flex-start">
          <Button onClick={handleReplay}>Replay editor animation</Button>
          <Stack direction="horizontal" gap={48}>
            <FormControl>
              <FormControl.Label>Perspective</FormControl.Label>
              <input name="perspective" type="range" onChange={handleChange} min="100" max="600" value={perspective} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Rotate</FormControl.Label>
              <input name="rotate" type="range" onChange={handleChange} min="-10" max="5" value={rotate} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Rotate Y axis</FormControl.Label>
              <input name="rotateY" type="range" onChange={handleChange} min="-10" max="0" value={rotateY} />
            </FormControl>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

VFX.parameters = {
  layout: 'fullscreen',
}

VFX.decorators = [
  Story => (
    <ThemeProvider colorMode="dark">
      <div style={{backgroundColor: 'black', minHeight: '100dvh', overflow: 'hidden'}}>
        <Story />
      </div>
    </ThemeProvider>
  ),
]
