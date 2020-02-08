

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // var generateEmptyTuple = function() {
  //   var tuple = new Array(2);
  //   return tuple;
  // }
  // this.each(function() {
  //   this.storage.push(generateEmptyTuple())
  // });
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  /*
  I keys and values
  O nothing
  C side effect of key value pair existing in array/bucket/tuple
    side effect keys convert to strings
  E NA
  */

  //taking a key and a value and putting them in a hashtable/object
  //Were pushing a key and a value(tuple) to a array to a limited storage array

  //get index
  //create an array that has a string key and a value(tuple)
  var tuple = [JSON.stringify(k), v];

  //check if limited array at index is empty
  //if empty
  if (this._storage[index] === undefined) {
    this._storage[index].push([tuple]);
  }
  /*
  I index key string
  O
  C side effect overwrite keys value
  E *note its either a key or its not
  */

  //iterate over every bucket
  //iterate over every tuple
  //access its key check if matches keys already passed in
  //overwrite their value
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][0] === tuple[0]) {
      this._storage[index][1] = v;
      return undefined;
    }
  }

  this._storage[index].push(tuple);
  //break

  //create bucket and push tuple
  //check existing tuples if key exists
  //if not to bucket array

  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


