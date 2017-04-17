const co = require('co')
const fs = require('fs')
const router = require('koa-router')
const log4js = require('koa-log4')
const mysql = require('koa-mysql');
const route = new router();
const logger = log4js.getLogger('router')
let filePath = './user.json' //json文件路径


// Create a MySQL connection pool (do this once)
const db = mysql.createPool({ user: 'root', password: 'root123', database: 'test', host: 'localhost' });



let readFromFile = () => {  //读文件函数
   return new Promise((resolve, reject) => { //封装成Promise对象
        fs.readFile(filePath, (err, data) => {
            if(err) {
                reject(err)
            }
            resolve(data)
        })
    })
}
let writeToFile = (content) => {  //写入文件
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, err => {
            if(err) {
                reject(err)
            }
            resolve({state: 'ok'})
        })
    })
}
route.get('/', co.wrap(function* (ctx) { //访问根目录
    logger.debug(' this is test log')
    if(ctx.session.view === undefined) {
        ctx.session.view = 0
    } else {
        ctx.session.view += 1
    }
    console.log('viewNum', ctx.session.view)
    yield ctx.render('index', {title: 'Nunjucks'})  //渲染模板views/index.html, 后面RESTful接口使用要用到该html文件
}))
// API GET, 查询数据
route.get('/api/user', co.wrap(function* (ctx, next) {
    try {
        // let users = JSON.parse(yield readFromFile()) //读取所有数据
        // ctx.body = JSON.stringify({status: 'success', data: users}) //返回json格式数据
        const rows = yield db.query("select * from users");

        ctx.body = JSON.stringify({status:1,data:rows});

    } catch(err) {  //异常
        logger.error('err', err)
        ctx.status = 500  //状态 500
        ctx.body =  JSON.stringify({status: 'failed'}) //返回错误状态
    }
}))
//API POST， 添加数据
route.post('/api/user', co.wrap(function* (ctx, next) {
    let newUser = {}
    //能够 通过request.body这种方式获取数据，归功于 koa-bodyparser 这个中间件
    newUser.name = ctx.request.body.name  //获取post请求参数
    newUser.age = ctx.request.body.age
    try {
        // let users = JSON.parse(yield readFromFile()) //读取所有数据
        // users.push(newUser) //加入新数据
        // yield writeToFile(JSON.stringify(users)) //重新写回json文件
        // ctx.body = JSON.stringify({status: 'success'}) //请求成功

        const rows = yield db.query("insert into users values(0,?,?)",[newUser.name,newUser.age]);

        logger.info(rows);

        ctx.body = JSON.stringify({status: 1}) //请求成功

    } catch(err) {
        // logger.error('err', err)
        // ctx.status = 500
        // ctx.body =  JSON.stringify({status: 'failed'})
    }
}))
//API PATCH， 修改数据
route.patch('/api/user/:name', co.wrap(function* (ctx, next) {
    let name = ctx.params.name //获取url中携带的参数
    let age = ctx.request.body.age //获取请求body中的参数
    const oldName = ctx .request.body.oldname;
    try {
        // let users = JSON.parse(yield readFromFile())
        // for(let i=0; i<users.length; i++) { //更新数据
        //     if(users[i].name === name) {
        //         users[i].age = age
        //         break
        //     }
        // }
        // yield writeToFile(JSON.stringify(users))
        // ctx.body = JSON.stringify({status: 'success'})

        const rows = yield db.query("update users set name=?,age=? where name=?",[name,age,oldName]);

        ctx.body = JSON.stringify({status: 1,data:rows}) //请求成功

    } catch(err) {
        logger.error('err', err)
        ctx.status = 500
        ctx.body = JSON.stringify({status: 'failed'})
    }
}))
//API DELETE, 删除数据
route.del('/api/user/:name', co.wrap(function* (ctx, next) {
    let name = ctx.params.name  //获取url参数
    try {
        // let users = JSON.parse(yield readFromFile())
        // for(let i=0; i<users.length; i++) {  //删除name所指数据
        //     if(users[i].name === name) {
        //         users.splice(i, 1)
        //         break
        //     }
        // }
        // yield writeToFile(JSON.stringify(users))
        // ctx.body = JSON.stringify({status: 'success'})


        const rows = yield db.query("delete from users where name=?",[name]);


        ctx.body = JSON.stringify({status: 1}) //请求成功

    } catch(err) {
        logger.error('err', err)
        ctx.status = 500
        ctx.body = JSON.stringify({status: 'failed'})
    }
}))
module.exports = route  //导出模块
