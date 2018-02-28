var path = require('path');
module.exports = {
  entry: "./test/index.js",
  output: {
    path: __dirname+"/test",
    filename: "indexjs.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}