/**
 * 2089. Find target indices after sorting array
 * https://leetcode.com/problems/find-target-indices-after-sorting-array/
 */

var targetIndices = function (nums, target) {
    nums = nums.sort((a, b) => a - b);
    let output = [];
    let start = 0;
    while (start < nums.length) {
        if (nums[start] === target) {
            output.push(start);
        }
        start++;
    }
    return output;
}
nums = [1, 2, 5, 2, 3], target = 2;
console.log(targetIndices(nums, target))