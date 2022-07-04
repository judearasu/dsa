/**
 * 1874. Minimize Product Sum of Two Arrays
 * https://leetcode.com/problems/minimize-product-sum-of-two-arrays/
 */

var minProductSum = function (nums1, nums2) {
    nums1 = nums1.sort((a, b) => a - b);
    let count = new Array(101).fill(0);
    for (let start = 0; start < nums2.length; start++) {
        count[nums2[start]]++;
    }
    let j = 0;
    let res = 0;
    for (let i = 100; i >= 1; i--) {
        while (count[i] > 0) {
            res += i * nums1[j];
            j++;
            count[i]--;
        }
    }
    return res;
}

nums1 = [5, 3, 4, 2], nums2 = [4, 2, 2, 5]
console.log(minProductSum(nums1, nums2));