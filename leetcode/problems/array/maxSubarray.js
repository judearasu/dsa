/**
 * 53. Maximum Subarray
 * https://leetcode.com/problems/maximum-subarray/
 */
/**Brute Force */
var maxSubArray = function (nums) {
    let maxValue = Number.MIN_SAFE_INTEGER;
    for (let x = 0; x < nums.length; x++) {
        let currentSubarray = 0;
        for (let y = x; y < nums.length; y++) {
            currentSubarray += nums[y];
            maxValue = Math.max(maxValue, currentSubarray);
        }
    }
    return maxValue;
};
console.log(maxSubArray(nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]))

/**Optimized Approach */

var maxSubArray2 = function (nums) {
    let maxSub = nums[0];
    let curSum = Number.MIN_SAFE_INTEGER;
    for (let num of nums) {
        if (curSum < 0) {
            curSum = 0;
        }
        curSum += num;
        maxSub = Math.max(curSum, maxSub);
    }
    return maxSub;
}
console.log(maxSubArray2(nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]))