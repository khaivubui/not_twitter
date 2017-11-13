const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './frontend/not_twitter.js',
  output: {
      path: path.resolve(__dirname, 'public'),
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.js$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['env']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
