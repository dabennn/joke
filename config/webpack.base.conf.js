const path = require('path');

module.exports = {
  context: path.resolve(__dirname, '..'),
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
	path: path.resolve(__dirname, '../dist'),
	filename: '[name].js'
  },
  module: {
	rules: [
	  {
		test: /\.json$/,
		use: 'json-loader'
	  },
	  {
		test: /\.js$/,
		loader: 'babel-loader',
		include: path.resolve(__dirname, '../src'),
		exclude: /node_modules/
	  }
	]
  }
};