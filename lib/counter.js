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
