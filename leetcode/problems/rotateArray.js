/**
 * Rotate Array
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function (nums, k) {
//     let i=0;
//     while(i<k){
//         let len = nums.length-i;
//         let popVal = nums.pop(nums[len-1]);
//         nums.unshift(popVal);
//         i++;
//     }
//     return nums;
// };

console.log(rotate(nums = [1,2,3,4,5,6,7], k = 3))