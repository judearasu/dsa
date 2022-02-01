/**
 * 581. Shortest Unsorted Continuous Subarray
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 */
var findUnsortedSubarray = function (nums) {
    const n = nums.length;
    let start = 0;
    let end = n - 1;

    // find first index violating ascending order
    while (start < n - 1 && nums[start] <= nums[start + 1]) {
        start += 1;
    }

    // edge case: already sorted
    if (start === n - 1) {
        return 0;
    }

    // find first index violating descending order in reverse
    while (end > 0 && nums[end] >= nums[end - 1]) {
        end -= 1;
    }

    // find min and max of our temporary window
    let windowMax = Number.MIN_SAFE_INTEGER;
    let windowMin = Number.MAX_SAFE_INTEGER;

    for (let i = start; i <= end; i++) {
        windowMin = Math.min(windowMin, nums[i]);
        windowMax = Math.max(windowMax, nums[i]);
    }
    // extend the window
    while (start > 0 && nums[start - 1] > windowMin) {
        start -= 1;
    }

    while (end < n - 1 && nums[end + 1] < windowMax) {
        end += 1;
    }
    return end - start + 1;
};

console.log(findUnsortedSubarray(nums = [2, 3, 3, 2, 4]))