var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.numericKey = 0;
  this.startOfStor = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
};

Queue.prototype.dequeue = function() {
  var currentlyServing = this.storage[this.startOfStor];
  delete this.storage[this.startOfStor];
  this.startOfStor++;
  return currentlyServing;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};
