/* eslint strict: 0 */
'use strict';

const path = require('path');

module.exports = {
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.vue$/, 
      loader: 'vue',
    }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
        },
      }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.vue'],
    packageMains: ['webpack', 'browser', 'web', 'browserify', ['jam', 'main'], 'main']
  },
  plugins: [

  ],
  externals: [
    // put your node 3rd party libraries which can't be built with webpack here (mysql, mongodb, and so on..)
  ]
};
