/**
 * 162. Find Peak Element
 * https://leetcode.com/problems/find-peak-element/
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left
};