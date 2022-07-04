/**
 * 347. Top K Frequent Elements
 * https://leetcode.com/problems/top-k-frequent-elements/
 */
var topKFrequent = function (nums, k) {
    if(!nums || !nums.length){
        return null;
    }
    let map = {};
    let x = 0;
    while(x<nums.length){
        map[nums[x]] = map[nums[x]] + 1 || 1;
        x++;
    };
    const sortedKeys = Object.keys(map).sort((a, b) => map[b] - map[a]);
    return sortedKeys.splice(0, k);
};

console.log(topKFrequent(nums = [1, 1, 1, 2, 2, 3], k = 2))