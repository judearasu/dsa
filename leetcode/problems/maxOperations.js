/**
 * Max Number of K-Sum Pairs
 * https://leetcode.com/problems/max-number-of-k-sum-pairs/
 */

var maxOperations = function (nums, k) {
    let hash_map = {};
    let counter = 0;
    let key;
    for (let i = 0; i < nums.length; i++) {
        key = k - nums[i];
        if (nums[i] in hash_map && hash_map[nums[i]] > 0) {
            counter += 1;
            hash_map[nums[i]] -= 1;
        } else if (key in hash_map) {
            hash_map[key] += 1
        } else {
            hash_map[key] = 1
        }
    }
    console.log(hash_map)
    return counter;
};

module.exports = maxOperations;