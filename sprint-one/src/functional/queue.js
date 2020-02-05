var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numericKey = 0;
  var startOfStor = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    //add the current value to storage by a numeric key
    storage[numericKey] = value;
    numericKey++;
  };

  someInstance.dequeue = function() {
    //takes the first value in storage and returns it while
    //deleting the first property as it has been 'served'
    var currentlyServing = storage[startOfStor];
    delete storage[startOfStor];
    startOfStor++;
    return currentlyServing;
  };

  someInstance.size = function() {
    //Object.keys.length
    return Object.keys(storage).length;
  };

  return someInstance;
};
