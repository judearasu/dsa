/**
 * Remove Duplicates
 * Educative: Given a sorted list of numbers, remove duplicates and return the new length. You must do this in-place and without using extra memory.
 */

var removeDuplicates = function (arr) {
    let slow = 0;
    let fast = 0;
    for (fast = 0; fast < arr.length - 1; fast++) {
        if (arr[fast] !== arr[fast + 1]) {
            slow++;
        }
    }
    return slow + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2]))