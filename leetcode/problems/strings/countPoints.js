/**
 * 2103. Rings and Rods
 * https://leetcode.com/problems/rings-and-rods/
 */

var countPoints = function (rings) {
    let map = new Map();
    for (let start = 0; start < rings.length; start += 2) {
        let color = rings[start];
        let rod = rings[start + 1];
        if (!map.has(rod)) {
            map.set(rod, new Set());
        }
        map.get(rod).add(color);
    }
    let count = 0;
    for (let [rod, setColors] of map) {
        if (setColors.size === 3) {
            count++;
        }
    }
    return count;
};
console.log(countPoints("B0B6G0R6R0R6G9"))