const path = require('path')
const baseConfig = require('../../webpack.config.build')
const packageJson = require('./package.json')

const config = baseConfig({
  path: path.resolve(__dirname, 'lib'),
  library: `${packageJson.name}`,
})

const { externals: baseExternal } = config

const externals = {
  ...baseExternal,
  spinner3000: 'spinner3000',
}

module.exports = {
  ...config,
  externals,
}
