function isNimble() {
  return true;
}

assert( typeof window.isNimble === "function", "isNimble() defined");
assert(isNimble.name === "isNimble", "isNimble() has a name");

var canFly = function() {
  return true;
};

assert( typeof window.canFly === "function", "canFly() defined");
assert(canFly.name === "", "canFly() has no name");

window.isDeadly = function() {
  return true;
};

assert( typeof window.isDeadly === "function", "isDeadly() defined");
assert(window.isDeadly.name === "", "isDeadly() has no name");

function outer() {
  assert( typeof inner === "function", "inner() in scope before declaration");
  function inner() {
  }

  assert( typeof inner === "function", "inner() in scope after declaration");
  assert(window.inner === undefined, "inner() not in global scope");
}

outer();
assert(window.inner === undefined, "inner() still not in global scope");

window.wieldsSword = function swingsSword() {
  return true;
};

assert(window.wieldsSword.name === 'swingsSword', "wieldSword's real name is swingsSword");