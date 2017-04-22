const Koa = require('koa');
const path = require('path');
const static = require('koa-static');

const app = new Koa();

//静态资源相对入口index的路径
const staticPath = './static';


app.use(static(path.join(__dirname,staticPath)));


app.use(async ctx => {
	ctx.body = 'hello laowang';
});

app.listen(3000,() => console.log('server start at port 3000'));
