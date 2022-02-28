/**
 * Move Zeroes
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/567/
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let lastNonZeroFoundAt = 0;
    for (let x = 0; x < nums.length; x++) {
        if (nums[x] !== 0) {
            nums[lastNonZeroFoundAt++] = nums[x];
        }
    }
    for (let i = lastNonZeroFoundAt; i < nums.length; i++) {
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]))