const XLSX = require('xlsx');
const Koa = require('koa');
const Route = require('koa-router');
const logger = require('koa-logger')();
// const render = require('koa-ejs');
const path = require('path')

const workbook = XLSX.readFile('test3.xlsx');


const sheetNames = workbook.SheetNames;



// console.log(sheetNames);


const worksheet = workbook.Sheets[sheetNames[0]];

// console.log(worksheet);


const headers = {};
let data = [];
const keys = Object.keys(worksheet);

// console.log(worksheet);
keys
    // 过滤以 ! 开头的 key
    .filter(k => k[0] !== '!')
    // 遍历所有单元格
    .forEach(k => {
        // 如 A11 中的 A
        let col = k.substring(0, 1);
        // 如 A11 中的 11
        let row = parseInt(k.substring(1));
        // 当前单元格的值
        let value = worksheet[k].v;
        // 保存字段名
        if (row === 1) {
            headers[col] = value;
            return false;
        }
        // 解析成 JSON
        if (!data[row]) {
            data[row] = {};
        }
        data[row][headers[col]] = value;
    });
	data = data.slice(2)
// console.log(data); //


const router = require('koa-router');
const co = require('co');
const nunjucksViews = require('koa-nunjucks-promise');
const mount = require('koa-mount');
const server = require('koa-static');


const app = new Koa();
const route = new router(); //新建路由对象

app.use(nunjucksViews(`${__dirname}/views`),{ //配置模板文件路径，例如：末班文件统一放在工程目录的views文件夹中
	ext:'ejs', //渲染文件后缀为html的文件
	noCache:true, //开发环境下不设置缓存
	watch:true, //开发环境下观察模板文件的变化并更新，方便开发
	filters:{//过滤器
		json:function (str) {
			return JSON.stringify(str,null,2)
		}
	}
});


route.get('/',co.wrap(function *(ctx) {
	// console.log(data);
	yield ctx.render('index2',{title:'hello',data:data});
}));


route.get('/route/test', co.wrap(function* (ctx) {  //路径配置
    ctx.body = 'feifeiyu nuaa' //直接在返回的body内打入字符串
}));


//设置静态文件路径
app.use(mount('/static',server(`${__dirname}/public`)))


app.use(route.routes())
	.use(route.allowedMethods());


app.listen(3000,() => console.log('server started,port 3000'));
