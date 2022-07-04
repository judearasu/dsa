/**
 * 905. Sort Array By Parity
 * https://leetcode.com/problems/sort-array-by-parity/
 */
var sortArrayByParity = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] % 2 === 0) {
            left++;
        } else {
            if (nums[right] % 2 !== 0) {
                right--;
            }
            if (nums[right] % 2 === 0) {
                [nums[right], nums[left]] = [nums[left], nums[right]];
                left++;
                right--;
            }
        }
    }
    return nums;
}
nums = [3, 1, 2, 4]
console.log(sortArrayByParity(nums));