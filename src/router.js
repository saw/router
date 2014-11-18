
var win;

// function handlePopState

function listen() {
	win.addEventListener('popstate', function(e) {
		
	});
}

var router = {
	listen: listen
};

//inject the window
module.exports = function(theWindow) {
	win = theWindow;

	return router;
}

