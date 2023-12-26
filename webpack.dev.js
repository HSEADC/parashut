<<<<<<< HEAD
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dev_build'
  },
  watch: true,
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dev_build')
  }
})
=======
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    static: './dev_build'
  },
  output: {
    path: path.resolve(__dirname, 'dev_build')
  }
})
>>>>>>> a7692aba611c3ead47078efb266977b0b269f028
