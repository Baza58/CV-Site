var autoprefixer = require('autoprefixer');
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
    	'babel-polyfill',
    	'./index.js'
  ],
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	module: {
		loaders: [
		{
			test: /\.js$/,
			loaders: ['babel'],
			exclude: /node_modules/,
		},
		{
			test: /\.scss$/,
			loaders: ['style','css','postcss', 'sass'],
		},
		{
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
        	'file?name=[path][name].[ext]?[hash]!./dir/file.png'
        ]
    }
		]
	},
	plugins: [
  			new webpack.optimize.UglifyJsPlugin({minimize: true}),
 	],
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};