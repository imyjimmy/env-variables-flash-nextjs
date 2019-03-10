const env = require('dotenv').config()
const withCSS = require('@zeit/next-css')
const webpack = require('webpack')

if (typeof require !== 'undefined') {
  require.extensions['.less'] = () => {}
  require.extensions['.css'] = file => {}
}

// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.

function HACK_removeMinimizeOptionFromCssLoaders(config) {
  console.warn(
    'HACK: Removing `minimize` option from `css-loader` entries in Webpack config'
  )
  config.module.rules.forEach(rule => {
    if (Array.isArray(rule.use)) {
      rule.use.forEach(u => {
        if (u.loader === 'css-loader' && u.options) {
          delete u.options.minimize
        }
      })
    }
  })
}

module.exports = withCSS({
  webpack: (config, options) => {
    console.log('graphql-yoga-endpoint: ', process.env.GRAPHQL_YOGA_ENDPOINT)
    console.log('node_env', process.env.NODE_ENV)
    config.module.rules.push({
      test: /\.png$/,
      loader: require.resolve('url-loader'),
    })

    config.plugins.push(new webpack.EnvironmentPlugin(env))

    HACK_removeMinimizeOptionFromCssLoaders(config)

    config.node = {
      fs: 'empty',
    }
    console.log('config:', config)
    console.log('env: ', env)
    return config
  },
  distDir: 'build',
  target: 'serverless',
})
