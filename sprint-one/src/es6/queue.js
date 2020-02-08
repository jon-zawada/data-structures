class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.numericKey = 0;
    this.startOfStor = 0;
  }
  enqueue(value) {
    this.storage[this.numericKey] = value;
    this.numericKey++;
  }

  dequeue() {
    var currentlyServing = this.storage[this.startOfStor];
    delete this.storage[this.startOfStor];
    this.startOfStor++;
    return currentlyServing;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}

