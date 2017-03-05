const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/api/hi', async function (ctx, next) {
    ctx.body = "Hi from Koa JS! (/api/hi)";
    next();
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(8888);