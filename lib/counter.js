var Counter = function() {
  var counter = {}
  var count = 0;
  counter.getCount = function() {
		return count;
  };
  counter.increaseCount = function() {
		++count;
  };
	counter.someNewFunc = function() {
		return "here is a new asdf func";
	}

  return counter;
};

module.exports = Counter;
