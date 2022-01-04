/**
 *1060. Missing Element in Sorted Array
 *Given an integer array nums which is sorted in ascending order and all of its elements are unique and given also an integer k, return the kth missing number starting from the leftmost number of the array.
 */

var missingElement = function (nums, k) {
    let missedElems = [];
    let start = nums[0];
    while (start <= nums[nums.length - 1]) {
        if (!(nums.includes(start))) {
            missedElems.push(start);
        }
        start++;
    }

    return missedElems[k - 1];
}

console.log(missingElement(nums = [4, 7, 9, 10], k = 3))