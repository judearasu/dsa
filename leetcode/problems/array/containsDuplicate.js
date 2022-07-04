/**
 * 217. Contains Duplicate
 * https://leetcode.com/problems/contains-duplicate/
 */

var containsDuplicate = function (nums) {
    let hashMap = {};
    for (let num of nums) {
        if (num in hashMap) {
            return true;
        }
        hashMap[num] = 1;
    }
    return false;
}
console.log(containsDuplicate(nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]))