/*
 function Ninja() {}

 Ninja.prototype.swingSword = function() {
 return true;
 }

 var ninja1 = Ninja();
 assert(ninja1 === undefined, 'No instance of Ninja created');

 var ninja2 = new Ninja();
 assert(ninja2 && ninja2.swingSword && ninja2.swingSword(), 'Instance exists and method is callable');
 */

/*
 function Ninja() {
 this.swung = true;
 this.swingSword = function() {
 return !this.swung;
 };
 }

 var ninja = new Ninja();
 Ninja.prototype.swingSword = function() {
 return this.swung;
 };
 assert(ninja.swingSword(), "Called the instance method, not the prototype method.");
 */

/*
 function Ninja() {
 }

 var ninja = new Ninja();
 assert( typeof ninja == "object", "The type of the instance is object.");
 assert( ninja instanceof Ninja, "instanceof identifies the constructor.");
 assert(ninja.constructor === Ninja, "The ninja object was created by the Ninja function.");
 */

/*
 function Ninja() {
 }

 var ninja = new Ninja();
 var ninja2 = new ninja.constructor();
 assert( ninja2 instanceof Ninja, "It's a Ninja!");
 assert(ninja !== ninja2, "But not the same Ninja!");
 */

/*
 function Person() {
 }

 Person.prototype.dance = function() {
 };
 function Ninja() {
 }

 Ninja.prototype = {
 dance : Person.prototype.dance
 };
 var ninja = new Ninja();
 assert( ninja instanceof Ninja, "ninja receives functionality from the Ninja prototype");
 assert( ninja instanceof Person, "... and the Person prototype");
 assert( ninja instanceof Object, "... and the Object prototype");
 */

/*
 function Person() {
 }

 Person.prototype.dance = function() {
 };

 function Ninja() {
 }

 Ninja.prototype = new Person();
 var ninja = new Ninja();
 assert( ninja instanceof Ninja, "ninja receives functionality from the Ninja prototype");
 assert( ninja instanceof Person, "... and the Person prototype");
 assert( ninja instanceof Object, "... and the Object prototype");
 assert( typeof ninja.dance == "function", "... and can dance!")
 */

/*
 if (!Array.prototype.forEach) {
 Array.prototype.forEach = function(callback, context) {
 for (var i = 0; i < this.length; i++) {
 callback.call(context || null, this[i], i, this);
 }
 };
 } else {
 assert(true, "This browser supports Array#forEach");
 }

 ["a", "b", "c"].forEach(function(value, index, array) {
 assert(value, "Is in position " + index + " out of " + (array.length - 1));
 });
 */

/*
 Object.prototype.keys = function() {
 var keys = [];
 for (var p in this) {
 if (this.hasOwnProperty(p)) keys.push(p);
 }
 console.log(keys.length);
 return keys;
 }

 var obj = { a: 1, b: 2, c: 3 };
 assert(obj.keys().length == 3, "obj has three keys");
 */

/*
 Number.prototype.add = function(num){
 return this + num;
 };

 var n = 5;
 assert(n.add(3) == 8, "It works when the number is in a variable.");
 assert((5).add(3) == 8, "Also works if a number is wrapped in parentheses.");
 assert(5.add(3) == 8, "What about a simple literal?");
 */

/*
 function User(first, last) {
 this.name = first + " " + last;
 }

 var name = "Rukia";
 var user = User("Ichigo", "Kurosaki");
 assert(name == "Rukia", "Name was set to Rukia.");
 */

function Test() {
  return this instanceof arguments.callee;
}

assert(!Test(), "We didn't instantiate, so it returns false.");
assert(new Test(), "We did instantiate, returning true.");