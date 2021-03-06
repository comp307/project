var path = require('path');
var webpack = require('webpack');

var config = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        './app.js',
         'webpack-hot-middleware/client'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: [
                    'style',
                    'css',
                    'sass?sourceMap'
                ]
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            }
        ]
    },
    stats: {
        errorDetails: true
    }
};

module.exports = config;
