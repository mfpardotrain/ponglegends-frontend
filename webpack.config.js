const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  mode: "development",
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true
            }
          }
        ]
      }
    ]
  }
};