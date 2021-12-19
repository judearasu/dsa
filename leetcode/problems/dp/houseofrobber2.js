/**
 * 213. House Robber II
 * https://leetcode.com/problems/house-robber-ii/
 */

var rob = function (nums) {
    return Math.max(nums[0], helper(nums.slice(1)), helper(nums.slice(0, nums.length - 1)));
}

var helper = function (nums) {
    let rob1 = 0;
    let rob2 = 0;

    for (let n of nums) {
        let newRob = Math.max(parseInt(n, 10) + rob1, rob2);
        rob1 = rob2;
        rob2 = newRob;
    }
    return rob2;
}
console.log(rob([2, 3, 2]))