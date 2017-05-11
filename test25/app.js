const Koa = require('koa');
const fs = require('fs');
const sendFile = require('koa-sendfile');
const send = require('koa-send');
const serve = require('koa-static');
const app = new Koa();

// app.use(serve('.'));


app.use(ctx => {
	try {
           const src = fs.createReadStream(__dirname + '/package.json');
           ctx.body = src;
       } catch (err) {
           ctx.body = "error"
       }
})


app.listen(3500, () => console.log('server start at port 3000'));
