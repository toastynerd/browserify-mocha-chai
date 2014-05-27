var Counter = require('../../../lib/counter');
var expect = require('chai').expect

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
