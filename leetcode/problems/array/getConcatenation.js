/**
 * 1929. Concatenation of Array
 * https://leetcode.com/problems/concatenation-of-array/
 */

var getConcatenation = function (nums) {
    if (!nums || !nums.length) {
        return null;
    }
    let ans = new Array(nums.length * 2).fill(0);
    for (let start = 0; start < nums.length; start++) {
        [ans[start], ans[start + nums.length]] = [nums[start], nums[start]]
        // ans[start] = nums[start];
        // ans[start + nums.length] = nums[start];
    }
    return ans;
}
nums = [1, 2, 1];
console.log(getConcatenation(nums))