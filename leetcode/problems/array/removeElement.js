/**
 * 27.Remove Element
 * https://leetcode.com/problems/remove-element/
 */

var removeElement = function (nums, val) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] != val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow;
}

console.log(removeElement(nums = [3, 2, 2, 3], val = 3))