const webpack = require('webpack')
const path = require('path')

const config = {
  entry: {
    'app': [
      'babel-polyfill',
      './src/index'
    ]
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
        query: {
          presets:[ 'es2015', 'react' ]
        }

      },
      { 
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  }
}

module.exports = config
