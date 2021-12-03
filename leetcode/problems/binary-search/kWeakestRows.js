/**
 * 1337. The K Weakest Rows in a Matrix
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
    const map = new Map();
    for (let idx = 0; idx < mat.length; idx++) {
        const rowCount = findOnes(mat[idx]);
        map.set(idx, rowCount);
    }
    const mapSort = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));
    return [...mapSort.keys()].slice(0, k);
};

var findOnes = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > 0) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return left;
}