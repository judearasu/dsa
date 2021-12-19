/**
 * 198. House Robber
 * https://leetcode.com/problems/house-robber/
 */

var rob = function (nums) {
    let rob1 = 0;
    let rob2 = 0;
    for (n of nums) {
        let temp = Math.max(parseInt(n, 10) + rob1, rob2);
        console.log(n, rob1, rob2)
        rob1 = rob2;
        rob2 = temp;
    }
    return rob2;
}
console.log(rob([2, 7, 9, 3, 1]))