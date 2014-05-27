(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Counter = function() {
    var counter = {}
    var count = 0;
    counter.getCount = function() {
	return count;
    };
    counter.increaseCount = function () {
	++count;
    };

    return counter;
};

module.exports = Counter;

},{}],2:[function(require,module,exports){
var Counter = require('../../../lib/counter');

describe("Counter", function() {
    var counter;
    before(function(){
	counter = new Counter();
    });

    it("should run a test", function(){
	expect(counter.getCount()).to.be.eql(0);
    });

    it("should be able to increment", function() {
	counter.increaseCount();
	expect(counter.getCount()).to.be.eql(1);
    });
});

},{"../../../lib/counter":1}]},{},[2])