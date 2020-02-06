var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(node) {
    //inputs nodes
    //outputs no output
    //sideffect of reassign the node to list.tail
    //reassign head if its the first node in the list
    //note this is constant time complexity
    //if value is not an instance of node then break return undefined
    //give node passed in a next value

    //pseudo
    //if list.head tripequals null this is first iteration
    //reassign list.head to value
    if (list.head === null) {
      list.head = node;
    }
    //check if there was a previous tail
    //current tails node.next is reassigned to the new tail
    if (list.tail !== null) {
      list.tail.next = node;
    }
    //reassign lsit.tail to value
    list.tail = node;
  };

  list.removeHead = function() {
    debugger;

    /* Inputs none
    O - return current head, Side effects: list.head = next node
    C - Empty list return nothing
    E - When removing last node, set list.head = null instead of node.next
    E2 - If there are no nodes in the list, break
    */

    //Removes the reference to the head node in the list, and points that reference to the next node instead, then returns the value of the former head node

    //access current head (or return nothing)
    if (list.head === null) {
      return undefined;
    }

    //temporarily store head.value
    var temp = list.head.value;
    //reassign list head to head's next node (or null)

    list.head = list.head.next;

    //return old head value
    return temp;
  };

  list.contains = function(target) {
    /*
    I - node value
    O - boolean
    C - N/A
    E - N/A - if no nodes, return false
    */

    //contains will see if a target value exists in the list

    //iterates through each node in the list and checks node.value for the target value

    //iterate over every node inside list
    //for each node, if node.value === target, return true (wouldn't work for objects)
    if (list.head === null) {
      return false;
    }
    var node = list.head;
    while (true) {
      if (node.value === target) {
        return true;
      }
      if (node.next === null) {
        return false;
      }
      node = node.next;
    }
    //otherwise check the next node
    //if node.next is null and node.value isn't the target, return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
