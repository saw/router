var Router = require('./node_modules/express/lib/router');
// console.log(router);

var r = new Router();

var route = r.route('/foo');
route.get(function(){});