const Topic = require('../models').Topic;

const cache = require('co-cache')({
	expire:10000
});

//新建一个话题
exports.addTopic = data => Topic.create(data);

//通过id获取一个话题,并且pv增加1
exports.getTopicById = id => Topic.findByIdAndUpdate(id,{$inc:{pv:1}}).exec();

//通过标签和页码获取10个话题
exports.getTopicsByTab = cache(function getTopicsByTab (tab,p) {
	const query = {};
	if (tab) {
		query.tab = tab;
	}


	return Topic.find(query).skip((p-1)*10).sort('-updated_at').limit(10).select('-content').exec();
},{
	key:function(tab,p){
		tab = tab || 'all';
		return this.name + ':' + tab + ':' + p;
	}
});

//获取用户所有话题
exports.getTopicsByName = name => Topic.find({'user.name':name}).sort('-updated_at').exec();

//通过ID增加一个话题的评论数
exports.incCommentById = id => Topic.findByIdAndUpdate(id,{$inc:{comment:1}}).exec();

//获取5条最新未评论话题
exports.getNoReplyTopics = cache(function getNoReplyTopics () {
	return Topic.find({comment:0}).sort('-updated_at').limit(5).select('title').exec();
});

//获取不同标签的话题数目
exports.getTopicsCount = cache(function getTopicsCount (tab) {
	const query = {};
	if (tab) {
		query.tab = tab;
	}
	return Topic.count(query).exec();
},{
	key:tab => {
		tab = tab || 'all';
		return this.name + ':' + tab;
	}
});
