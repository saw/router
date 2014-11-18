var expect = require('chai').expect;
var jsdom = require('jsdom');
var sinon = require('sinon');
var routerFactory = require('../src/router.js');



describe('listen', function(done) {

	var window;

	beforeEach(function(done) {
		jsdom.env("http://www.cool.com/","<html><body></body></html>",[], function(errors, win) {
			window = win;
			done();
		});
	});

	it('exists', function(done){
		try {
			expect(routerFactory(window).listen).to.be.a('function');
		} catch (e) {
			return done(e);
		}
		done();
	});

	it('subscribes to history events', function() {
		var spy = sinon.spy(window, 'addEventListener');
		
		var router = routerFactory(window);

		router.listen();

		expect(window.addEventListener.calledOnce).to.be.true;
		expect(window.addEventListener.args[0][0]).to.equal('popstate');

		window.addEventListener.reset();
	});


	
});