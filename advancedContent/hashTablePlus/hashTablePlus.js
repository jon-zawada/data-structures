class HashTable {
  constructor() {
    this._limit = 4;
    this._count = 0;
    this._storage = new LimitedArray(this._limit);
  }

  insert(k, v) {
    var index = this.hashKey(k);
    var bucket = this._storage.get(index);

    if (bucket === undefined) {
      this._storage.set(index, new LimitedArray(4));
      bucket = this._storage.get(index);
    }
    var tuple = [k, v];
    if (this.retrieve(k)) {
      for (let i = 0; i < 4; i++) { //4 is the bucket length, which was chosen arbitrarily (4 is much greater than 1)
        var currentTuple = bucket.get(i);
        if (currentTuple[0] === k) {
          currentTuple[1] = v;
          return true;
        }
      }
    }
    for (let i = 0; i < 4; i++) {
      if (bucket.get(i) === undefined) {
        bucket.set(tuple);
        this._count++;
        if (this._count > 0.75 * _limit) {
          this.resize(_.count * 2);
        }
      }
    }
  }

  retrieve(k) {
    var index = this.hashKey(k);
    var searchingBucket = this._storage.get(index);
    if (!searchingBucket) {
      return undefined;
    }
    for (var i = 0; i < 4; i++) {
      if (searchingBucket.get(i) === k) {
        return searchingBucket[i][1];
      }
    }
    return undefined;
  }

  remove(k) {
    var index = this.hashKey(k);

    var bucket = this._storage.get(index);
    for (let i = 0; i < 4; i++) {
      if (bucket.get(i)[0] === k) {
        this._storage.set(i, undefined);
        this._count--;
        if (this._count < 0.25 * this._limit) {
          this.resize(this._limit / 2);
        }
      }
    }

  }

  resize(newSize) {
    var oldStorage = this._storage;
    this._storage = new LimitetArray(newSize);
    var context = this;
    var bucketFunc = function(bucket, index, hash) {
      for (let i = 0; i < 4; i++) {
        var tuple = bucket.get(i);
        if (bucket.get(i) !== undefined) {
          context.set(this.hashkey(bucket[0],[bucket[0], bucket[1]]);
        }
      }
    };
    oldStorage.each(bucketFunc);
  }

  hashKey(str) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
      hash = (hash << 5) + hash + str.charCodeAt(i);
      hash = hash & hash; // Convert to 32bit integer
      hash = Math.abs(hash);
    }
    return hash % this._limit;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */




//LIMITED ARRAYS HERE

class LimitedArray {
  constructor(limit) {
    this.storage = [];
    this.limit = limit;
  }

  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }

  set(index, value) {
    this.checkLimit(index);
    this.storage[index] = value;
  }

  each(callback) {
    for (var i = 0; i < this.storage.length; i++) {
      callback(this.storage[i], i, this.storage);
    }
  }

  checkLimit(index) {
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (this.limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */