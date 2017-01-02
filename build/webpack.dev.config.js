/**
 * Created by donnie on 16/2/26.
 */

var webpack = require('webpack');

var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = require('./webpack.base.config');

config.devtool = 'inline-source-map'; //'eval-source-map';

config.entry = {
    index: ['./client/index.js', 'webpack-dev-server/client?http://0.0.0.0:8080', 'webpack/hot/only-dev-server']
};

config.plugins = (config.plugins || []).concat([
    new webpack.HotModuleReplacementPlugin(),
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
            NODE_ENV: '"development"'
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
]);

config.devServer = {
    contentBase: './public',
    port: 8080,
    proxy: {
        '/api/*': {
            target:　'http://localhost:3000',
            host: 'localhost:3000'
        }
    },
    hot: true,
    inline: true,
    historyApiFallback: true,
    colors: true,
    stats: 'normal',
    outputPath: './public',
    watch: true
};

module.exports = config;