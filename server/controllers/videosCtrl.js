var fsUtils = require('../utils/fsUtils');
var serverConfig = require('../../build/webpack.dev.config.js').devServer;

module.exports = async (ctx, next) => {
    ctx.response.type = 'application/json;charset=utf-8';
    var videos = await fsUtils.list(serverConfig.contentBase);
    console.info(videos);
    ctx.response.body = JSON.stringify({success: true, videos: videos});
}