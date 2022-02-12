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

console.log(addTwoNumbers(l1 = [2, 4, 3], l2 = [5, 6, 4]))