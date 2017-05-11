const Comment = require('../models').Comment;

//添加一条评论
exports.addComment = data => Comment.create(data);

//通过话题id获取对应评论
exports.getCommentsByTopicId = id => Comment.find({topic_id:id}).sort('updated_at').exec();
