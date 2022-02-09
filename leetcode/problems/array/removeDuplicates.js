/**
 * 26. Remove Duplicates from Sorted Array
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

var removeDuplicates = function (nums) {
    let left = 0;
    let right = 1;
    if (nums.length === 0 || nums.length === 1) {
        return nums.length;
    }
    while (right < nums.length) {
        if (nums[left] < nums[right]) {
            left += 1;
            nums[left] = nums[right];
        }
        right += 1;
    }
    return left + 1;
}


console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 6, 7, 7, 8]))