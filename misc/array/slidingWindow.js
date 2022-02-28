/**
 * Sliding Window Javascript
 */

function sliding_window_maximum(nums, k) {
    let i = 0;
    let j = 0;
    let res = [];
    let max = -Infinity;
    while (j < nums.length) {
        max = findMax(i, j);
        if (j - i + 1 < k) {
            j++;
        } else if (j - i + 1 === k) {
            res.push(max);
            i++;
            j++;
        }
    }
    function findMax(i, j) {
        let max = -Infinity;
        for (let k = i; k <= j; k++) {
            max = Math.max(max, nums[k]);
        }
        return max;
    }
    return res;
}

arr = [1, 3, 2, 5, 8, 7]
k = 3;

console.log(sliding_window_maximum(arr, k));