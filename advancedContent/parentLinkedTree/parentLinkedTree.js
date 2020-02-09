class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.parent = null; //Did you know? If you don't declare a value for a property in the constructor, hasOwnProperty returns false?
  }

  addChild(value) {
    var child = new Tree(value);
    child.parent = this;
    this.children.push(child);
  }

  contains(target) {
    if (this.value === target) {
      return true;
    }
    if (this.children.length === 0) {
      return false;
    } else { //node has children
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
      return false;
    }
  }

  removeFromParent() {
    // for (let i = 0; i < this.parent.children.length; i++) {
    //   if (this.parent.children[i] === this) {
    //     this.parent.children[i]
    //   }
    // }
    if (this.parent === null) {
      return false;
    }

    this.parent.children = _.reject(this.parent.chilren, function(value) {
      return Boolean(value === this);
    });
    this.parent = null;
    return true;
  }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
