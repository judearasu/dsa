/**
 *  Remove duplicates from sorted Array - Easy - Array
 *  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */

var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}
console.log(removeDuplicates(nums = [0,0,1,1,1,2,2,3,3,4]));
module.exports = removeDuplicates;