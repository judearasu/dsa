/**
 * Contains Duplicate
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/578/
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let map = {};
    let i = 0;
    while (i < nums.length) {
        if(nums[i] in map){
            return true;
        }else{
            map[nums[i]] = 1;
        }
        i++;
    }
    return false;
};

// console.log(containsDuplicate([1, 2, 2, 1]));
// console.log(containsDuplicate(nums = [1,2,3,4]))