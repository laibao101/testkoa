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


const data = [
	{"name":"laowang","age":40,"sex":"male"},
	{"name":"xiaowang","age":20,"sex":"male"}
];

app.use(async ctx => {
	const title = "lao wang";
	await ctx.render('index',{
		title,
		data
	});
});


app.listen(3000,console.log('server start at port 3000'));
