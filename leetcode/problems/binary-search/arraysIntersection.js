/**
 * 1213. Intersection of Three Sorted Arrays
 * https://leetcode.com/problems/intersection-of-three-sorted-arrays/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    let ans = [];

    while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {

        if (arr1[p1] === arr2[p2] && arr2[p2] === arr3[p3]) {
            ans.push(arr1[p1]);
            p1++;
            p2++;
            p3++;
        } else {
            if (arr1[p1] < arr2[p2]) {
                p1++;
            } else if (arr2[p2] < arr3[p3]) {
                p2++;
            } else {
                p3++;
            }
        }
    }
    return ans;
};