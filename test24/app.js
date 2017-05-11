const app = require('koa')();
const logger = require('koa-logger');
const bodyparser = require('koa-bodyparser');
const staticCache = require('koa-static-cache');
const errorhandler = require('koa-errorhandler');
const session = require('koa-generic-session');
const MongoStore = require('koa-generic-session-mongo');
const flash = require('koa-flash');
const gzip = require('koa-gzip');
const scheme = require('koa-scheme');
const router = require('koa-frouter');
const routerCache = require('koa-router-cache');
const render = require('co-ejs');
const config = require('config-lite');


const merge = require('merge-descriptors');
const core = require('./lib/core');
const renderConf = require(config.renderConf);

merge(renderConf.locals || {}, core, false);

app.keys = [renderConf.locals.$app.name];

app.use(errorhandler());
app.use(bodyparser());
app.use(staticCache(config.staticCacheConf));
app.use(logger());
app.use(session({
	store: new MongoStore(config.mongodb)
}));
app.use(flash());
app.use(scheme(config.schemeConf));
app.use(routerCache(app,config.routerCacheConf));
app.use(gzip());
app.use(render(app,renderConf));
app.use(router(app,config.routerConf));


app.listen(config.port, () => console.log(`Server listening on port ${config.port}`));
