/**
 * Single Number
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {};
    for (let x = 0; x < nums.length; x++) {
        if (!(nums[x] in map)) {
            map[nums[x]] = 1;
        } else {
            delete map[nums[x]];
        }
    }
    for (let y in map) {
        if (map[y] === 1) {
            return y;
        }
    }
};
// console.log(singleNumber(nums = [2, 2, 1]));
console.log(singleNumber(nums = [4,1,2,1,2]));