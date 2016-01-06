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
        	'url?limit=10000'
            // 'file?hash=sha512&digest=hex&name=[hash].[ext]',
            // 'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
    }
		]
	},
	plugins: [
  			// new webpack.optimize.UglifyJsPlugin({minimize: true}),
 	],
	postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};