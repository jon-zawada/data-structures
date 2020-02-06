describe('linkedList', function() {
  var linkedList, node4, node5;

  beforeEach(function() {
    linkedList = LinkedList();
    node4 = Node(4);
    node5 = Node(5);
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    var node4 = Node(4);
    var node5 = Node(5);

    linkedList.addToTail(node4);
    expect(linkedList.tail.value).to.equal(node4.value);

    linkedList.addToTail(node5);
    expect(linkedList.tail.value).to.equal(node5.value);
  });

  it('should remove the head from the list when removeHead is called', function() {
    var node4 = Node(4);
    var node5 = Node(5);

    linkedList.addToTail(node4);
    linkedList.addToTail(node5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    var node4 = Node(4);

    linkedList.addToTail(node4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    var node4 = Node(4);
    var node5 = Node(5);

    linkedList.addToTail(node4);
    linkedList.addToTail(node5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    var node4 = Node(4);
    var node5 = Node(5);

    linkedList.addToTail(node4);
    linkedList.addToTail(node5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });

  // add more tests here to test the functionality of linkedList
});
