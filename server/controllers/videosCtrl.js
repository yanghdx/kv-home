module.exports = async (ctx, next) => {
    ctx.response.type = 'application/json;charset=utf-8';
    let videos = [
        {name: 'test.mp4'},
        {name: 'test2.mp4'}
    ];
    ctx.response.body = JSON.stringify({success: true, videos: videos});
}