var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  numericKey = 0;
  startOfStor = 0;
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};


queueMethods.enqueue = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
};

queueMethods.dequeue = function() {
  var currentlyServing = this.storage[this.startOfStor];
  delete this.storage[this.startOfStor];
  this.startOfStor++;
  return currentlyServing;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};