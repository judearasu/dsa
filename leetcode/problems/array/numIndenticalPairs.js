/**
 * 1512. Number of Good Pairs
 * https://leetcode.com/problems/number-of-good-pairs/
 */

var numIndenticalPairs = function (nums) {
    let count = 0;
    for (let start = 0; start < nums.length; start++) {
        for (let end = 1; end < nums.length; end++) {
            if (nums[start] === nums[end] && start < end) {
                count += 1;
            }
        }
    }
    return count;
}
nums = [1, 2, 3];
console.log(numIndenticalPairs(nums))