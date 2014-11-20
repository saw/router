
var win;

// function handlePopState

function listen() {
	win.addEventListener('popstate', function(e) {
		console.log('event', e);
	});
}

function get(url, callback) {

}

var router = {
	listen: listen,
	get: get
};

//inject the window
module.exports = function(theWindow) {
	win = theWindow;

	return router;
}

