const User = require('../models').User;

//新建用户
exports.addUser = data => User.create(data);

//通过id获取用户
exports.getUserById = id => User.findbyId(id).exec();

//通过name获取用户
exports.getUserByName = name => User.findOne({name:name}).exec();
