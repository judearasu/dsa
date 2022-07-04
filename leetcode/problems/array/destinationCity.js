/**
 * 1436. Destination City
 * https://leetcode.com/problems/destination-city/
 */

var destCity = function (paths) {
    let hash = new Map(paths);
    for (let dest of hash.values()) {
        if (!hash.has(dest)) {
            return dest;
        }
    }
};
paths = [["London", "New York"], ["New York", "Lima"], ["Lima", "Sao Paulo"]]
console.log(destCity(paths));