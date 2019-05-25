const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['styled-components'] = path.resolve(
      './node_modules',
      'styled-components'
    )
    config.resolve.alias['react'] = path.resolve('./node_modules', 'react')
    config.resolve.alias['react-dom'] = path.resolve(
      './node_modules',
      'react-dom'
    )
    return config
  },
}
