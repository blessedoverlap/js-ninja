/* 4.3
 function chirp(n) {
 return n > 1 ? chirp(n - 1) + "-chirp" : "chirp";
 }

 assert(chirp(3) === "chirp-chirp-chirp", "Calling the named function comes naturally.");
 */

/* 4.5
 var ninja = {
 chirp : function(n) {
 return n > 1 ? this.chirp(n - 1) + "-chirp" : "chirp";
 }
 };

 var samurai = {
 chirp : ninja.chirp
 };

 ninja = {};

 try {
 assert(samurai.chirp(3) == "chirp-chirp-chirp", "Is this going to work?");
 } catch(e) {
 assert(false, "Uh, this isn't good! Where'd ninja.chirp go?");
 }
 */

/*
 var ninja = function myNinja() {
 assert(ninja === myNinja, "This function is named two things at once!");
 };

 ninja();

 assert( typeof myNinja === "undefined", "But myNinja isn't defined outside of the function.");
 */

/*
 var store = {
 nextId : 1,
 cache : {},
 add : function(fn) {
 if (!fn.id) {
 fn.id = store.nextId++;
 return !!(store.cache[fn.id] = fn);
 }
 }
 };

 function ninja() {
 }

 console.log(store.add(ninja));
 assert(store.add(ninja), "Function was safely added.");
 console.log(store.add(ninja));
 assert(!store.add(ninja), "But it was only added once.");
 */

/*
 var elems = {
 length : 0,

 add : function(elem) {
 Array.prototype.push.call(this, elem);
 },

 gather : function(id) {
 this.add(document.getElementById(id));
 }
 };

 elems.gather("first");
 assert(elems.length == 1 && elems[0].nodeType, "Verify that we have an element in our stash");
 elems.gather("second");
 assert(elems.length == 2 && elems[1].nodeType, "Verify the other insertion");
 console.log(elems);
 */

/*
 function smallest(array) {
 return Math.min.apply(Math, array);
 }

 function largest(array) {
 return Math.max.apply(Math, array);
 }

 assert(smallest([0, 1, 2, 3]) == 0, "Located the smallest value.");
 assert(largest([0, 1, 2, 3]) == 3, "Located the largest value.");
 */

/*
 function merge(root) {
 //console.log(arguments);
 //console.log(arguments.length);
 //console.log(root);
 for (var i = 0; i < arguments.length; i++) {
 console.log(arguments[i]);
 for (var key in arguments[i]) {
 root[key] = arguments[i][key];
 }
 }
 return root;
 }

 var merged = merge(
 {name : "Batou"},
 {city : "Niihama"});

 assert(merged.name == "Batou", "The original name is intact.");
 assert(merged.city == "Niihama", "And the city has been copied over.");
 console.log(merged);
 */

/*
 function multiMax(multi) {
 return multi * Math.max.apply(Math, Array.prototype.slice.call(arguments, 1));
 }

 assert(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");
 */

/*
 function makeNinja(name) {
 }

 function makeSamurai(name, rank) {
 }

 assert(makeNinja.length == 1, "Only expecting a single argument");
 assert(makeSamurai.length == 2, "Two arguments expected");
 */

/*
 function addMethod(object, name, fn) {
 var old = object[name];
 object[name] = function() {
 if (fn.length == arguments.length)
 return fn.apply(this, arguments)
 else if ( typeof old == 'function')
 return old.apply(this, arguments);
 };
 }

 var ninjas = {
 values : ["Dean Edwards", "Sam Stephenson", "Alex Russell"]
 };

 addMethod(ninjas, "find", function() {
 return this.values;
 });

 addMethod(ninjas, "find", function(name) {
 var ret = [];
 for (var i = 0; i < this.values.length; i++)
 if (this.values[i].indexOf(name) == 0)
 ret.push(this.values[i]);
 return ret;
 });

 addMethod(ninjas, "find", function(first, last) {
 var ret = [];
 for (var i = 0; i < this.values.length; i++)
 if (this.values[i] == (first + " " + last))
 ret.push(this.values[i]);
 return ret;
 });

 assert(ninjas.find().length == 3, "Found all ninjas");
 assert(ninjas.find("Sam").length == 1, "Found ninja by first name");
 assert(ninjas.find("Dean", "Edwards").length == 1, "Found ninja by first and last name");
 assert(ninjas.find("Alex", "Russell", "Jr") == null, "Found nothing");
 */

var ninja = function(){};
assert(typeof ninja == "function", "Functions have a type of function");