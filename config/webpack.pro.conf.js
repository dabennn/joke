const config = require('./webpack.base.conf.js');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(config, {
  module: {
	rules: [
	  {
		test: /\.css$/,
		loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader?modules!postcss-loader'})
	  },
	  {
		test: /\.styl(us)?$/,
		use: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!postcss-loader!stylus-loader'})
	  }
	]
  },
  plugins: [
	new HtmlWebpackPlugin({
	  filename: 'index.html',
	  template: path.resolve(__dirname, '../index.html'),
	  inject: true
	}),
	new ExtractTextPlugin('[name].css'),
	new webpack.optimize.OccurrenceOrderPlugin(),
	new webpack.optimize.UglifyJsPlugin()
  ]
})
