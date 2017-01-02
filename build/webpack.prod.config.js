/**
 * Created by donnie on 16/2/26.
 */

var path = require('path');

var webpack = require('webpack')

var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var config = require('./webpack.base.config');

config.plugins = (config.plugins || []).concat([
    new CleanWebpackPlugin(['./public/dist'], {
        root: path.join(__dirname, '../')
    }),
    new HtmlWebpackPlugin({
        template: './client/templates/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin("scripts/common.js"),
    new CopyWebpackPlugin([{
        from: './client/images',
        to: 'images'
    }]),
    new ExtractTextPlugin('styles/styles.css', {
        publicPath: '/',
        allChunks: true
    }),

    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
]);

module.exports = config;