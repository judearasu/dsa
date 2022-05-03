/**
 * 11. Container With Most Water
 * https://leetcode.com/problems/container-with-most-water/
 */

var maxArea = function (heights) {
    // BT Approach
    // let maxArea = 0;
    // for (let p1 = 0; p1 < heights.length; p1++) {
    //     for (let p2 = p1 + 1; p2 < heights.length; p2++) {
    //         const length = Math.min(heights[p1], heights[p2]);
    //         const width = p2 - p1;
    //         const area = length * width;
    //         maxArea = Math.max(area, maxArea);
    //     }
    // }
    // return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))