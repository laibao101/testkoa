const Koa = require('koa')
const co = require('co')
const nunjucksViews = require('koa-nunjucks-promise')
const mount = require('koa-mount')
const server = require('koa-static')
const session = require("koa-session2")
//--------------------
const bodyParser = require('koa-bodyparser') // 引入koa-bodyparser
//--------------------
const log4js = require('koa-log4')
// require('./log')
const logger = log4js.getLogger('app')
//-----------------
const route = require('./router')  //引入 router 配置
//-----------------
logger.info('--------step into koa-------------')
const app = new Koa()
app.use(nunjucksViews(`${__dirname}/views`, {
    ext: 'html',
    noCache: true,
    watch: true,
    filters: {  //过滤器
        json: function(str) {
          return JSON.stringify(str, null, 2)
        }
    },
    globals: {  //设置对于nunjucks的全局变量
        // staticPath: '//static'
    }
}))
app.use(mount('/static', server(`${__dirname}/public`)))
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))
//-----------------
app.use(bodyParser()) //使用 bodyparse 解析参数 默认支持json， form
//------------------
app.use(session({
    key: "sessionId",   //default "koa:sess",
    maxAge: 5000
}))
//---------------
app.use(route.routes()) //路由
    .use(route.allowedMethods())
//----------------
app.listen(3000, () => console.log('server started， port 3000'))
module.exports = app


