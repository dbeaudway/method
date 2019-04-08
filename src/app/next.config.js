const withLess = require('@zeit/next-less')

module.exports = withLess({
  cssModules: false,
  distDir: '../../dist/functions/next'
})
