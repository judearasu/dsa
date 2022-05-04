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
    let maxArea = 0, p1 = 0, p2 = heights.length - 1;
    while (p1 < p2) {
        const height = Math.min(heights[p1], heights[p2]);
        const width = p2 - p1;
        const area = height * width;
        maxArea = Math.max(maxArea, area);
        if (heights[p1] <= heights[p2]) {
            p1++;
        } else {
            p2--;
        }
    }
    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))