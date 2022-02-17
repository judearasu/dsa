/**
 * Two Sum Sort
 * https://www.educative.io/courses/algorithms-ds-interview/qZmkEK7wKmG
 */

var two_sum_sorted = function (arr, target) {
    // WRITE YOUR BRILLIANT CODE HERE
    let map = {};
    for (let start = 0; start < arr.length; start++) {
        let diff = target - arr[start];
        if (diff in map) {
            return [map[diff], start];
        }
        map[arr[start]] = start;
    }
    return [];
}

console.log(two_sum_sorted([3, 2, 4], 6));