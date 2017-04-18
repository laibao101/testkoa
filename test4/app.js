const Koa = require('koa');
const router = require('koa-router');
const co = require('co');
const nunjucksViews = require('koa-nunjucks-promise');
const mount = require('koa-mount');
const server = require('koa-static');


const app = new Koa();
const route = new router(); //新建路由对象

app.use(nunjucksViews(`${__dirname}/views`),{ //配置模板文件路径，例如：末班文件统一放在工程目录的views文件夹中
	ext:'html', //渲染文件后缀为html的文件
	noCache:true, //开发环境下不设置缓存
	watch:true, //开发环境下观察模板文件的变化并更新，方便开发
	filters:{//过滤器
		json:function (str) {
			return JSON.stringify(str,null,2)
		}
	}
});


route.get('/',co.wrap(function *(ctx) {
	yield ctx.render('index',{title:'hello',data:'laowang Yeah!'});
}));


route.get('/route/test', co.wrap(function* (ctx) {  //路径配置
    ctx.body = 'feifeiyu nuaa' //直接在返回的body内打入字符串
}));


//设置静态文件路径
app.use(mount('/static',server(`${__dirname}/public`)))


app.use(route.routes())
	.use(route.allowedMethods());


app.listen(3000,() => console.log('server started,port 3000'));
