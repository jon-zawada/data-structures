// var BinarySearchTree = function(value) {
// };

class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }

  insert(value) {
    // var node = new BinarySearchTree(value);

    // //checks parent node's children recursively
    // //until it finds a spot to insert the node
    // var recursiveInsert = function(parent, node) {
    if (value === this.value) {
    //if (node.value === parent.value) {
      console.log(`ERROR! ${value} already exists in this tree`);
      return false;
    }
    if (value > this.value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else { //if a right child exists we'll have to check the next child
        this.right.insert(value);
      }
    } else { //node.value is less than parent.value
      if (this.left === null) {
        this.left = new BinarySearchTree(value);
      } else { //if a left child exists we'll have to check the next child
        this.left.insert(value);
      }
    }
  }
  //   recursiveInsert(this, node);
  // }

  contains(value) {
    /*
    I value
    O boolean
    C NA
    E NA
    */

    //searches tree recursively to find if value exists
    //either the current node value equals value, or it has a child we'll search, or the search ends and returns false

    //check this.value against value
    if (value === this.value) {
      //if value matches, return true
      return true;
    //else
    //find which child node to check (right)
    } else if (value > this.value) {
      if (this.right === null) {
        return false;
      } else {
        return this.right.contains(value);
      }
    } else { //value < this.value
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(value);
      }
    }



  }

  depthFirstLog(callback) {
    /*
    I function
    O NA (side effects of running funciton on each, so potentially loads of outputs)
    C function should run on values of binary tree, not nodes
    E if callback isn't a function
    */

    //applying a function to every element in the node in the order of parent, left child (and left then children of those), right child (and children)

    //run callback on current node's value
    callback(this.value);
    //check if node has left children
    if (this.left) {
      this.left.depthFirstLog(callback);
    }
    //if so, run depthFirstLog on left child (recurses from there)

    //check if node has right children
    if (this.right) {
      this.right.depthFirstLog(callback);
    }
    //if so, run depthFirstLog on right child (recurses from there)
  }

}


/*
 * Complexity: What is the time complexity of the above functions?
 */
