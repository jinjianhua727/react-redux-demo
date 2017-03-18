var webpack = require('webpack')
var path = require('path')

module.exports = {
	entry :'./index.js',
	module: {
	   loaders: [
	     {
	       test: /\.js?$/,
	       exclude: /(node_modules)/,
	       loader: 'babel-loader',
	       query: {
	         presets: ['react', 'es2015']
	       }
	     }
	   ]

	},
	output: {
	   path: __dirname + '/dist/js/',
	   filename: "bundle.js"
	}
}