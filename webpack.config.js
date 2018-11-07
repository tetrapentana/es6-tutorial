const path = require('path');

module.exports = {
  entry: '/Users/dpsusanto/Documents/es6-tutorial/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  }
};