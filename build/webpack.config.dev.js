'use strict'
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/main.ts'
  ],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        loaders: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      // {
      //   test: /\.sass$/,
      //   use:[{ 
      //     loader: 'sass-loader',
      //     // Requires sass-loader@^8.0.0
      //     options: {
      //       implementation: require('sass'),
      //       sassOptions: {
      //         fiber: require('fibers'),
      //       },
      //     },
      //   }
      //   ]
      // },
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new VuetifyLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  ]
}