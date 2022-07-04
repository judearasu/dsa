/**
 * 2 .Add Two Numbers
 * https://leetcode.com/problems/add-two-numbers/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function LinkedList() {
    this._length = 0;
    this._head = null;
}

LinkedList.prototype.push = function (data) {
    // Create a new node with Data
    var node = new ListNode(data);

    // We are inserting the first node in the list
    if (this._head === null) {
        this._head = node;
    } else {
        // Find the last node
        var current = this._head;

        while (current.next) {
            current = current.next;
        }

        current.next = node;
    }

    // Increment the length
    this._length++;
}

var addTwoNumbers = function (l1, l2) {
    let list = new ListNode(0);
    let currentNode = list;

    let sum = 0;
    let carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        sum = sum % 10;

        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next;

        sum = carry;
        carry = 0;
    }

    return list.next;
};
