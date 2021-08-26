function LinkedList(head, tail){
    this.head= head;
    this.tail= tail;
}

function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

let node1 = new Node(21, 'node2', null);

console.log(node1);