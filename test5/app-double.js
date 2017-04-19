var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'upload/' })
var fs = require('fs')

var app = express();


var createFolder = function(folder){
    try{
        fs.accessSync(folder);
    }catch(e){
        fs.mkdirSync(folder);
    }
};

var uploadFolder = './upload/';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
		console.log(file);
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage });


app.post('/upload', upload.array('logos', 12), function (req, res, next) {
	var file = req.file;
    res.send({ret_code: '0',file:file});
})

app.get('/form', function(req, res, next){
    var form = fs.readFileSync('./form_double.html', {encoding: 'utf8'});
    res.send(form);
});

// //
// // var express = require('express'),
// //     multer = require('multer');
//
// // var app = express();
// var storge = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'upload')
//     },
//     filename: function (req, file, cb) {
//         var fileformat = (file.originalname).split('.');
//         cb(null, file.fieldname+'-'+Date.now()+'.'+fileformat[fileformat.length-1]);
//     }
// })
//
// var upload = multer({storage: storge})
// app.use(express.static('./static'));
//
// app.post('/upload', upload.array('logos',20), function (req, res, next) {
//     console.log(req.files);
//     res.send('abc');
// })

app.listen(3000);
