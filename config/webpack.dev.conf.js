const config = require('./webpack.base.conf.js');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(config, {
  module: {
	rules: [
	  {
		test: /\.css$/,
		use: [
		  'style-loader', {
			loader: 'css-loader',
			options: {
			  modules: true
			}
		  }, 'postcss-loader'
		]
	  },
	  {
		test: /\.styl(us)?$/,
		use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
	  }
	]
  },
  devtool: 'eval-source-map',
  devServer: {
	inline: true,
	hot: true,
	historyApiFallback: true
  },
  plugins: [
	new webpack.HotModuleReplacementPlugin(),
	new HtmlWebpackPlugin({
	  template: path.resolve(__dirname, '../index.html')
	})
  ]
});
