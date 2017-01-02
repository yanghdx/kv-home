const Koa = require('koa');
const convert = require('koa-convert');
const logger = require('koa-logger');
const json = require('koa-json');
const bodyParser = require('koa-bodyparser');
const path = require('path');
const views = require('koa-views');
const koaOnError = require('koa-onerror');
// const co = require('co');
// app
const app = new Koa();

// log cost time & url
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`logger: ${ctx.method} ${ctx.url} ${ms}ms`);
});

// middlewares
app.use(convert(bodyParser()));
app.use(convert(json()));
app.use(convert(logger()));
app.use(convert(require('koa-static')(path.join(__dirname, '../public'))));

// views
app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}));

// 500 error
koaOnError(app, {
    template: 'server/views/500.ejs'
});

// routes
const router = require('./routes/index');
app.use(router.routes());

// 404
app.use(async (ctx) => {
    ctx.status = 404;
    await ctx.render('404');
});

// listen on port
app.listen(3000);

// on error
app.on('error', function(err, ctx) {
    console.log(err);
});

console.log('Koa2 app started at port 3000!');
