var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(string) {
  //add string as property name and value of said property
  this._storage[string] = string;

};

setPrototype.contains = function(string) {
  if (this._storage[string]) {
    return true;
  }
  return false;
};

setPrototype.remove = function(string) {
  delete this._storage[string];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
