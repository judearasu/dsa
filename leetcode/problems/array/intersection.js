/**
 * 349. Intersection of two arrays
 * https://leetcode.com/problems/intersection-of-two-arrays/
 */

/**
 * Input: nums1 = [1,2,2,1], nums2 = [2,2] Output: [2]
 */

var intersection = function (nums1, nums2) {
    let map = {};
    let result = [];
    for(i of nums1){
        map[i] || (map[i] = true);
    }
    for(i of nums2){
        map[i] === true && result.push(map[i] = i);
    }
    return result;
};

console.log(intersection(nums1 = [1, 2, 2, 1], nums2 = [2, 2]));