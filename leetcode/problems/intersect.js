/**
 * Intersection of Two Arrays II 
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort((a,b) =>a-b);
    nums2.sort((a,b) =>a-b);
    let i = 0;
    let j = 0;
    let result = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
};

console.log(intersect(nums1 = [1, 2, 2, 1], nums2 = [2, 2]))
// console.log(intersect(nums1 = [4,9,5], nums2 = [9,4,9,8,4]));
// console.log(intersect(nums1 = [1], nums2 = [1]));
// console.log(intersect(nums1 = [1, 2], nums2 = [1, 1]));