/**
 * 1064. Fixed Point
 * https://leetcode.com/problems/fixed-point/
 * @param {number[]} arr
 * @return {number}
 */
var fixedPoint = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    let minIndex = -1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (mid === arr[mid]) {
            minIndex = mid;
            right = mid - 1;
        } else if (mid < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    return minIndex;
};
