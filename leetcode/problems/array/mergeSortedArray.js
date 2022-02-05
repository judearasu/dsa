/**
 * 88. Merge Sorted Array
 * https://leetcode.com/problems/merge-sorted-array/
 */
var merge = function (nums1, m, nums2, n) {
    // for (let start = 0; start < n; start++) {
    //     nums1[start + m] = nums2[start];
    // }
    // return nums1.sort();

    let pass = 0;
    for (let start = m; start < nums1.length; start++) {
        nums[start] = nums[pass];
        pass++;
    }
    return nums1.sort();
}
console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1))