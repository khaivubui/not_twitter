const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/not_twitter.jsx',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
