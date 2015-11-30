'use strict';

var styling = require('styling');

module.exports = {
  entry: {
    main: './index.jsx'
  },
  output: {
    filename: './app.js',
    path: './'
  },
  module: {
    loaders: [{
        test: /\.css$/,
        loaders: ['style', 'css?modules']
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loaders: [
          'react-hot',
          'babel-loader?presets[]=react,presets[]=es2015',
          'eslint-loader'
        ]
      }
    ]
  }
};
