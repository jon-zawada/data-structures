var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numericKey = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    //puts value into storage by means of numeric key
    storage[numericKey] = value;
    numericKey++;
  };

  someInstance.pop = function() {
    //'serves' the last value in storage and deletes it
    var currentlyServing = storage[Object.keys(storage).length - 1];
    delete storage[Object.keys(storage).length - 1];
    numericKey--;
    return currentlyServing;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
