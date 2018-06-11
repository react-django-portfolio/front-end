'use strict'

const HTMLPlugin = require('html-webpack-plugin')
const ExtractPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: `${__dirname}/src/main.js`,

  devServer: {
    historyApiFallback: true,
    port: 8080,
  },

  output: {
    filename: 'build-[hash].js',
    path: `${__dirname}/build`,
    publicPath: '/',
  },

  plugins: [
    new HTMLPlugin({template: `${__dirname}/src/index.html`}),
    new ExtractPlugin('bundle-[hash].css'),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract(['css-loader', 'sass-loader']),
      },
    ],
  },
}
