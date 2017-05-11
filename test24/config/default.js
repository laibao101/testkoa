const path = require('path');
var cache = require('koa-router-cache');
var MemoryCache = cache.MemoryCache;

module.exports = {
	port:process.env.PORT || 3000,
	mongodb:{
		url:"mongodb://127.0.0.1:27017/club"
	},
	schemeConf:path.join(__dirname,'./default.scheme'),
	staticCacheConf:path.join(__dirname,'../theme/publices'),
	renderConf:path.join(__dirname,'../theme/config'),
	routerConf:'routes',
	routerCacheConf:{
		'GET /': {
		    key: 'cache:index',
		    expire: 2 * 1000,
		    get: MemoryCache.get,
		    set: MemoryCache.set,
		    passthrough: MemoryCache.passthrough,
		    evtName: 'clearIndexCache',
		    destroy: MemoryCache.destroy
		  }
	}
}
