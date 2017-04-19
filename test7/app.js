const XLSX = require('xlsx');
const Koa = require('koa');
const Route = require('koa-router');
const logger = require('koa-logger')();
// const render = require('koa-ejs');
const path = require('path')

const workbook = XLSX.readFile('test2.xlsx');


const sheetNames = workbook.SheetNames;



// console.log(sheetNames);


const worksheet = workbook.Sheets[sheetNames[0]];

// console.log(worksheet);


const headers = {};
const data = [];
const keys = Object.keys(worksheet);
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
            return;
        }
        // 解析成 JSON
        if (!data[row]) {
            data[row] = {};
        }
        data[row][headers[col]] = value;
    });
// console.log(data); //


const app = new Koa();
const router = new Route();

const co = require('co');
const view = require('co-views');

const render = view('./views',{
    default:'ejs',//如果不写，默认为jade
    map:{
        html:'swig',//指定html文件用swig解析
        ejs:'ejs',//指定ejs文件用ejs解析
        jade:'jade',//...
    }
});


app.use(logger);

router.get('/', ctx => {
    console.log(2);
    ctx.body = render('index.ejs');
    console.log(ctx.body);
})

app.use(router.routes());


app.listen(3000, () => console.log('server start at port 3000'));
