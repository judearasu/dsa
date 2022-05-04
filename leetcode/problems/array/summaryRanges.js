/**
 * 228. Summary Ranges
 * https://leetcode.com/problems/summary-ranges/
 */

var summaryRanges = function (nums) {
    const summary = [];
    for (let i = 0, j = 0; j < nums.length; ++j) {
        if (j + 1 < nums.length && nums[j + 1] === nums[j] + 1) {
            continue;
        }
        if (i === j) {
            summary.push(nums[i] + "");
        } else {
            summary.push(nums[i] + "->" + nums[j]);
        }
        i = j + 1;
    }
    return summary;
}
nums = [0, 1, 2, 4, 5, 7];
console.log(summaryRanges(nums));