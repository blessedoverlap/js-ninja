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