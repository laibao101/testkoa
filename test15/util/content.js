const path = require('path');
const fs = require('fs');

//封装读取目录内容方法
const dir = require('./dir');

//封装读取文件内容方法
const file = require('./file')

/**
 * 获取静态资源内容
 * @param  {object} ctx            koa上下文
 * @param  {string} fullStaticPath 静态资源在本地的绝对路径
 * @return {string}                请求获取到的本地内容
 */
async function content (ctx,fullStaticPath) {
	//封装请求资源完的绝对路径
	const reqPath = path.join(fullStaticPath,ctx.url);

	//判断请求路径是已经存在的目录或者是文件
	const exist = fs.existsSync(reqPath);

	//返回请求的内容，默认为空
	let content = '';

	if (!exist) {
		//如果请求目录或者文件不存在，返回404
		content = '404 Not Found! o(╯□╰)o！';
	}else{
		//判断访问地址是文件目录还是文件名
		const stat = fs.statSync(reqPath);

		if (stat.isDirectory()) {
			//如果为目录，则渲染目录里面的内容
			content = dir(ctx.url, reqPath)
		}else{
			//如果请求为文件，则读取文件内容
			content = await file(reqPath);
		}
	}

	return content;
}

module.exports = content;
