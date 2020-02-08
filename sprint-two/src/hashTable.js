

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
  //create a Bucket of length 4 at each index during construction of the Hash
  // for (let i = 0; i < this._limit; i++) {
  //   this._storage.set(i, []);
  // }
};

HashTable.prototype.insert = function(k, v) {
  //check bucket at index. If nothing at index, then create array for bucket

  /*
  I key, value
  O undefined
  C can only access set, get, and each functions
  C cannot access array values directly
  C Create a Limited Array at index before putting a tuple in
  C (because it needs to run in constant time)
  C - EACH and only EACH gives access to storage and indices directly
  E First value at an index needs to initialize an Array
  */



  /*
  I keys and values
  O
  C create a limited array for each bucket that we add too
    for every limited array we create, a tuple will exist of a key and value
  E NA
  */
  //create an object in a limited array
  //creating a limited array where buckets(limited arrays) that store tuples(key/value)

  //retrieve index
  //using index to create initial array(hash table)
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if hash table at index 0 is empty we set limited arrays for each index in the hashtable
  if (this._storage[0] === undefined) { //won't work since 0 isn't a property of _.storage
    // var eachFunction = function(index) {
    //   index = LimitedArray(4);
    // };
    // this._storage.each(eachFunction);
    for (var i = 0; i < this._limit; i++) {
      this._storage.storage.push(LimitedArray(4));
    }
  }
  //create tuples and store in empty bucket
  var tuple = [JSON.stringify(k), v];
  var bucket = this._storage[index].storage;

  for (var i  = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
    } else if (bucket[i] === undefined) {
      debugger;
      bucket[i].push(tuple);
    }
  }
};

HashTable.prototype.retrieve = function(k) {



  /*
  I key, size of Hash (for hash function)
  O arbitrary value
  C NA
  E a key that doesn't exist in the hash (return false)
  */

  //retrieves a value at a given key
  //hashes the key, checks the returned index
  //iterates through all the potential buckets at that index
  //checking indices of buckets until the end (bucket index empty) or finds key

  //get hash index value
  var index = getIndexBelowMaxForKey(k, this._limit);
  var stringifiedKey = JSON.stringify(k);

  //at _.storage[index]
  var bucket = this._storage[index].storage;

  //check through each index of bucket
  for (let i = 0; i < bucket.length; i++) {
    //for stringified key
    if (bucket[i][0] === stringifiedKey) {
      return bucket[i][1];
      //until finding an undefined node

    } else if (bucket[i][0] === undefined) {
      return false;
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


