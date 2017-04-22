const Koa = require('koa');
const views = require('koa-views');
const path = require('path');
const app = new Koa();


//加载模板引擎
app.use(views(
	path.join(__dirname,'./view'),{
		extension:'ejs'
	}
));


app.use(async ctx => {
	const title = "lao wang";
	await ctx.render('index',{
		title
	});
});


app.listen(3000,console.log('server start at port 3000'));
