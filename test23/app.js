
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '@qq.com',
        pass: '' //授权码,通过QQ获取

    }
});
var mailOptions = {
    from: '@qq.com', // 发送者
    to: '@qq.com', // 接受者,可以同时发送多个,以逗号隔开
    subject: 'nodemailer2.5.0邮件发送', // 标题
    html: `<h2>再发一封试试</h2><h3>
  		<a href="">laibao</a></h3>`
};

transporter.sendMail(mailOptions, function(err, info) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('发送成功');
    res.send('发送成功');
});
