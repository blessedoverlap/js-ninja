/*
var outerValue = 'ninja';

function outerFunction() {
assert(outerValue == "ninja", "I can see the ninja.");
}

outerFunction();
*/

/*
var outerValue = 'ninja';

var later;

function outerFunction() {
assert(tooLate, "OuterFunc can see the ronin");

function innerFunction(paramValue) {
assert(outerValue, "Inner can see the ninja.");
assert(innerValue, "Inner can see the samurai.");
assert(paramValue, "Inner can see the wakizashi");
assert(tooLate, "Inner can see the ronin");
}

later = innerFunction;
later();
var innerValue = 'samurai';

}

assert(!tooLate, "Outer can't see the ronin");

outerFunction();
var tooLate = "ronin";
*/

//later('wakizashi');

/*
function Ninja() {
  var feints = 0;

  this.getFeints = function() {
    return feints;
  };

  this.feint = function() {
    feints++;
  };
}

var ninja = new Ninja();

ninja.feint();
assert(ninja.getFeints() == 1, "We're able to access the internal feint count.");
assert(ninja.feints === undefined, "And the private data is inaccessible to us.");
*/

/*
Function.prototype.memoized = function(key) {
  this._values = this._values || {};
  return this._values[key] !== undefined ? this._values[key] : this._values[key] = this.apply(this, arguments);
};

Function.prototype.memoize = function() {
  var fn = this;
  return function() {
    return fn.memoized.apply(fn, arguments);
  };
};

var isPrime = (function(num) {
  var prime = num != 1;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}).memoize();

assert(isPrime(17), "17 is prime");
*/

/*
(function() {
  var numClicks = 0;
  document.addEventListener("click", function() {
    console.log(++numClicks);
  }, false);
})();
*/
