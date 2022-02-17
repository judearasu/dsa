/**
 * Middle Of LinkedList
 */

function middleOfLinkedList(head) {
    let slow = fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = fast.next;
    }
    return slow;
}
//Driver code
let inputs = ["0 1 2 3 4", "0 1 2 3 4 5"]
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}
for (let i = 0; i < inputs.length; i++) {
    const dummy = new ListNode(-1);
    let cur = dummy;
    for (const val of inputs[i].split(' ')) {
        const node = new ListNode(parseInt(val, 10));
        cur.next = node;
        cur = node;
    }
    console.log("Middle of linked list : ", middleOfLinkedList(dummy.next).val);
}
