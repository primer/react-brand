const fs = require('fs')
const path = require('path')

const directoryPath = path.join(__dirname, '../../../packages/react/src')
const supportedComponents = []

function checkDirectory(directoryPath) {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(`Unable to scan directory: ${err}`)
      return
    }

    for (const file of files) {
      const filePath = path.join(directoryPath, file)

      if (fs.statSync(filePath).isDirectory()) {
        checkDirectory(filePath)
      } else if (path.extname(filePath) === '.tsx') {
        const fileContents = fs.readFileSync(filePath, 'utf8')

        if (fileContents.includes('useAnimation')) {
          const componentName = path.basename(filePath, '.tsx')
          supportedComponents.push(componentName)
        }
      }
    }
  })
}

checkDirectory(directoryPath)

process.on('exit', function () {
  const fileContents = `/* This file is generated by a script. Do not modify. */\n\nexport const supportedComponents = [\n  '${supportedComponents.join(
    "',\n  '",
  )}'\n];\n`
  const filePath = path.join(__dirname, 'components-with-animation.js')
  fs.writeFileSync(filePath, fileContents)
  // eslint-disable-next-line no-console
  console.log(`Found ${supportedComponents.length} supported components.`)
})
