/**
 * 1408 - Running Sum of 1d Array
 */
var runningSum = function (nums) {
    if (!nums || !nums.length) {
        return null;
    }

    for (let x = 0; x < nums.length; x++) {
        if (x > 0) {
            nums[x] = nums[x - 1] + nums[x]
            console.log(nums[x])
        }
    }
    return nums;
}

// console.log(runningSum([1, 2, 3, 4]));
// console.log(runningSum([1, 1, 1, 1, 1]));
// console.log(runningSum([3, 1, 2, 10, 1]));
console.log(runningSum([1,2,3,4]));