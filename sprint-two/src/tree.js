var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  //each tree is an object that contains an array of children
  //children would be other tree objects
  //trees with no children contain empty arrays(or overwrite as null)
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
/*
I arbitraty value that will be a label
O a tree object
C
E passing the same tree(this)
*/

  //this method will add children to a tree
  //Creates a child if there is no array of current children, it will initialize a new array of children

  //check if value does not equal 'this'
  // if (value !== this) {
  // //check if this.children is equal to null
  //   if (this.children === null) {
  //     //if it is create our storage for current/future trees, and set this.child to that array
  //     this.children = [];
  //   }
  this.children.push(Tree(value));
  //if not null then push new tree to already made array



};

treeMethods.contains = function(target) {
  /*
  I a target value
  O boolean
  C NA
  E NA
  */

  //will check if the target exists in tree
  //WIll check if this.value of any nodes in the tree are equal to target

  //check if node that has no children is equal to target
  //if node has no children
  //and value of node is target return true

  if (this.value === target) {
    return true;
  }
  if (this.children === null) {
    return false;
  } else { //node has children
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(target)) {
        return true;
      }
    }
    return false;
  }
  //else node does have children
  //run search function on each child
  //if no child returns true we will return false
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
