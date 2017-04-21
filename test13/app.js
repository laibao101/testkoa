const Koa = require('koa');
const app = new Koa();




//解析上下文里面node原生请求的post参数
function parsePostData (ctx) {
	return new Promise ((resolve,reject) => {
		try {
			let postdata = "";
			ctx.req.addListener('data',data => {
				postdata += data;
			});
			ctx.req.addListener('end', () => {
				const parseData = parseQueryStr(postdata);
				resolve(parseData);
			});
		} catch (e) {
			reject(e);
		}
	})
}

//将post请求参数字符串解析成json
function parseQueryStr (queryStr) {
	const queryData = {};
	const queryStrList = queryStr.split('&');
	console.log(queryStrList);
	for (const [index,queryStr] of queryStrList.entries()) {
		const itemList = queryStr.split('=');
		queryData[itemList[0]] = decodeURIComponent(itemList[1]);
	}
	return queryData;
}


app.use( async ctx => {
	if (ctx.url === '/' && ctx.method === 'GET') {
		//当get请求的时候返回表单页面
		const html = `
			<h1>koa2 request post demo</h1>
			<form action="/" method="post">
				<p>userName:</p>
				<input type="text" name="userName"/>
				<br />
				<p>nickName:</p>
				<input type="text" name="nickName"/>
				<br />
				<p>email:</p>
				<input type="text" name="email"/>
				<br />
				<button type="submit">submit</button>
			</form>
		`;
		ctx.body = html;
	}else if( ctx.url === '/' && ctx.method === 'POST'){
		// 当POST请求的时候，解析POST表单里的数据，并显示出来
	   	const postData = await parsePostData( ctx );
		const html = `
			<p>userName:</p>
			<input type="text" name="userName" value="${postData.userName}"/>
			<br />
			<p>nickName:</p>
			<input type="text" name="nickName" value="${postData.nickName}" />
			<br />
			<p>email:</p>
			<input type="text" name="email" value="${postData.email}" />
		`;
	   	ctx.body = html;
   }else{
	   	// 其他请求显示404
   		ctx.body = '<h1>404！！！ o(╯□╰)o</h1>';
   }
})


app.listen(3000, () => console.log('server start at port 3000'));
