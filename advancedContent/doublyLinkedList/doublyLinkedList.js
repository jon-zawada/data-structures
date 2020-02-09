var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype = {
  addToTail: function(value) {

    //create a new node from the value passed in
    var node = new Node(value);

    //if list.head tripequals null this is first iteration
    //reassign list.head to value

    if (this.head === null) {
      this.head = node;
    }
    //check if there was a previous tail
    //current tails node.next is reassigned to the new tail
    if (this.tail !== null) {
      this.tail.next = node;
      node.previous = this.tail;
    }
    //reassign lsit.tail to value
    this.tail = node;
  },

  removeHead: function() {
    //Removes the reference to the head node in the list, and points that reference to the next node instead, then returns the value of the former head node

    //access current head (or return nothing)
    if (this.head === null) {
      return undefined;
    }

    //temporarily store head.value
    var temp = this.head.value;
    //reassign list head to head's next node (or null)
    if (this.head.next !== null) {
      this.head.next.previous = null;
    }
    this.head = this.head.next;

    //return old head value
    return temp;
  },

  contains: function(target) {
    //iterates through each node in the list and checks node.value for the target value
    if (this.head === null) {
      return false;
    }
    var node = this.head;
    while (true) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      node = node.next;
    }
  }
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
