/**
 * Move Zeroes
 * https://www.educative.io/courses/algorithms-ds-interview/7XRGRvv7g2j
 */

var moveZeroes = function (nums) {
    let slow = 0;
    for (let fast = 0; fast < nums.length; fast++) {
        if (nums[fast] !== 0) {
            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
            // let temp = nums[fast];
            // nums[fast] = nums[slow];
            // nums[slow] = temp;
            slow++
        }
    }
    return nums;
}

console.log(moveZeroes([1, 0, 2, 0, 0, 7]))