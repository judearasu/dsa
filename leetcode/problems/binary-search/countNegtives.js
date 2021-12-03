/**
 * 1351. Count Negative Numbers in a Sorted Matrix
 * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let count = 0;
    for (let idx = 0; idx < grid.length; idx++) {
        const index = findNegatives(grid[idx])
        count += grid[idx].length - index;
    }
    return count;
};

var findNegatives = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < 0) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}