const path = require('path')
const baseConfig = require('../../webpack.config.build')
const packageJson = require('./package.json')

const config = baseConfig({
  path: path.resolve(__dirname, 'lib'),
  library: `${packageJson.name}`,
})

const configExport = {
  ...config,
  resolve: {
    extensions: ['.js', '.jsx']
  },
}

console.log(configExport)
module.exports = configExport
