

// Instantiate a new graph
var Graph = function() {
  this.nodes = {
    edges: {}
  };
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  //{}
  //{}
  this.nodes[node] = node;
  this.nodes.edges[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  /*
  I nodes
  O boolean
  C NA
  E NA
  */
  //checks if something is in graph
  //Checks this.nodes property for the node passed in, if it exits returns true else false

  //check if this.nodes node property
  //return true
  if (this.nodes[node]) {
    return true;
  }
  return false;
  //return this.nodes[node] ? true : false
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  /*
  */
  var formerEdges = Object.keys(this.nodes.edges[node]);
  for (let i = 0; i < formerEdges.length; i++) {
    delete this.nodes.edges[formerEdges[i]][node];
  }
  delete this.nodes[node];
  delete this.nodes.edges[node];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  /*
  */
  if (this.nodes.edges[fromNode][toNode]) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  //obj1[obj2] = obj2
  this.nodes.edges[fromNode][toNode] = toNode;
  this.nodes.edges[toNode][fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes.edges[fromNode][toNode];
  delete this.nodes.edges[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    if (key !== 'edges') {
      cb(this.nodes[key]);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


