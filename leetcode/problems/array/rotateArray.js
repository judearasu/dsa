/**
 * 189. Rotate Array
 * https://leetcode.com/problems/rotate-array/
 */

var rotate = function (nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
}

var reverse = function (nums, start, end) {
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));