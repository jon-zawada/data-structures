

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {

  //create an object in a limited array
  //creating a limited array where buckets(limited arrays) that store tuples(key/value)

  //retrieve index
  //using index to create initial array(hash table)
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var stringk = JSON.stringify(k);

  if (!bucket) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  var tuple = [stringk, v];
  if (this.retrieve(k)) {
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === stringk) {
        bucket[i][1] = v;
      }
    }
  }
  bucket.push(tuple);

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var searchingBucket = this._storage.get(index);
  if (!searchingBucket) {
    return undefined;
  }
  for (var i = 0; i < searchingBucket.length; i++) {
    if (searchingBucket[i][0] === JSON.stringify(k)) {
      return searchingBucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //Accessing our bucket at index 0, if it matches our key overwrite it with nothing

  //access bucket at index
  var bucket = this._storage.get(index);
  //stringify k and
  //compare to bucket at index 0
  //if they are equal then
  //overwrite the bucket to be undefined
  if (bucket[0][0] === JSON.stringify(k)) {
    this._storage.set(index, undefined);
  }
  //if they are not equal do nothing


};



/*
 * Complexity: What is the time complexity of the above functions?
 */


