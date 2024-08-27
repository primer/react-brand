// eslint-disable-next-line import/no-commonjs, @typescript-eslint/no-var-requires
const fs = require('fs')

const cleanLine = (line: string) => line.trim().replace(/\t/g, '').trim()

const beforeAfterArr: {
  before?: string
  after: string
}[] = []

try {
  const data = fs.readFileSync('diff.txt', 'utf8')
  console.log('Diff raw...')
  console.log(data)
  const lines = data.split(/\r?\n/).map(cleanLine)
  console.log('Diff cleaned...')
  console.log(lines)
  for (const line of lines) {
    if (line.includes('|')) {
      const [before, after] = line.split('|')
      if (before && after) {
        beforeAfterArr.push({before: before.trim(), after: after.trim()})
      }
    } else {
      if (line.includes('>    --')) {
        beforeAfterArr.push({after: line.replace('>    --', '--').trim()})
      }
    }
  }
} catch (err) {
  throw new Error('error converting diff.txt')
}

if (beforeAfterArr.length > 0) {
  const template = `
  ### 🔍 Design token changes found

  <details>
  <summary>View CSS variable changes</summary>
    ${beforeAfterArr.reduce((acc, {before, after}) => {
      return (acc += `
\`\`\`diff${
        before
          ? `
- ${before}`
          : ''
      }
+ ${after}
\`\`\`
      `)
    }, '')}
  

  </details>
  
  `
  try {
    console.log('writing diff.md')
    console.log(template.trim())
    fs.writeFileSync('diff.md', template.trim())
    // file written successfully
  } catch (err) {
    throw new Error()
  }
}
