/**
 * https://leetcode.com/problems/same-tree/
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
var isSameTree = function (p, q) {
    let pLen = p.length;
    let qLen = q.length;
    if (pLen !== qLen) {
        return false;
    }
    let x = 0;
    while (x < pLen) {
        if (p[x] !== q[x]) {
            return false
        }
        x++;
    }
    return true;
};
// console.log(isSameTree(p=[1,2,1], q=[1,1,2]));
console.log(isSameTree(p=[1,2], q=[1,null,2]));
//console.log(isSameTree(p = [2, 4, 5], q = [2, 4, 5]));