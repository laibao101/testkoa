const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');
const fs = require('fs');
const logger = require('koa-logger');

const app = new Koa();

const router = new Router();


app.use(logger());

const createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
};

const uploadFolder = './upload/';

createFolder(uploadFolder);

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }
});

const upload = multer({storage:storage});

router.post('/upload',upload.any(),ctx => {
	ctx.body = {
		code:1,
		file:ctx.req.file
	}
});

// app.use(router.post('/upload', upload.single('avatar')));


router.get('/form', ctx => {
	const form = fs.readFileSync('./form.html', {encoding: 'utf8'});

	ctx.body = form;
})

app.use(router.routes())
	.use(router.allowedMethods());


app.listen(3000, () => console.log('server start at port 3000'))
