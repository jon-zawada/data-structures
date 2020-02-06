var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.numericKey = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
};

stackMethods.pop = function() {
  var currentlyServing = this.storage[this.numericKey - 1];
  delete this.storage[this.numericKey - 1];
  this.numericKey--;
  return currentlyServing;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};