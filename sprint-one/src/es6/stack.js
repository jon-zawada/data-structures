class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.numericKey = 0;
  }

  push(value) {
    this.storage[this.numericKey] = value;
    this.numericKey++;
  }

  pop() {
    var currentlyServing = this.storage[this.numericKey - 1];
    delete this.storage[this.numericKey - 1];
    this.numericKey--;
    return currentlyServing;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}
