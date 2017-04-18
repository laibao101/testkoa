const Koa = require('koa');
const router = require('koa-router')();
const koaBody = require('koa-body')();
const logger = require('koa-logger')();

const app = new Koa();


// app.use( (ctx,next) => {
// 	const start = new Date();
// 	return next().then( () => {
// 		const ms = new Date() - start;
// 		console.log(`${ctx.method} -> ${ctx.url} - ${ms}ms`);
// 	});
// });
//

router.get('/hello/:name',ctx => {
	const name = ctx.params.name;
	ctx.body = `<h1>Hello,${name}!</h1>`;
});

router.post('/link',koaBody,ctx => {
	ctx.body = {
		code:1,
		description: 'ok',
    	result: ctx.request.body
	};
});


app.use(logger);

app.use(router.routes());

// 统一的错误处理
app.use(async(ctx, next) => {
  try {
    await next()
  } catch(e) {
    ctx.body = {
      code: 0,
      description: '大哥，你迷路了么？？？',
	  result:""
    }
  }
});



// 来一个闹钟
const sleep = (time, type = 0) => {
  return new Promise((yes, no) => {
    setTimeout(() => {
      switch (type) {
        case 1:
          no('起床失败，重启ing')
          break
        case 2:
          no('重启失败，强制重启')
        default:
          yes('起床成功。。。')
          break
      }
    }, time)
  })
}
// 这是一个寒冬的早上，要起来上班了
router.get('/hello/:name', async(ctx) => {
  let name = ctx.params.name
  ctx.body = `<h1>Hello, ${name}!</h1>`

  // 第一次肯定起不来
  try {
    const data = await sleep(100, 1)
    console.log(name + data)
  } catch (e) {
    console.log(name + e)
  }

  // 第二次还是失败了
  try {
    const data = await sleep(200, 2)
    console.log(name + data)
  } catch (e) {
    console.log(name + e)
  }

  // 好了，一二不过三，可以起来了
  try {
    const data = await sleep(300)
    console.log(name + data)
  } catch (e) {
    console.log(name + e)
  }
})

app.listen(3500);
