/**
 * Largest Unique Number
 * https://leetcode.com/problems/largest-unique-number/\
 *  O(n) time and O(1) space approach
 */

var largestUniqueNumber = function (nums) {
    let hash_map = {};
    let maxVal = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash_map) {
            hash_map[nums[i]] += 1;
        } else {
            hash_map[nums[i]] = 1;
        }
    }
    for(const prop in hash_map){
        if(hash_map[prop] === 1){
            maxVal = Math.max(prop, maxVal)
        }
    }
    return maxVal;
};

module.exports = largestUniqueNumber;