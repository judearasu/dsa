/**
 * First Element Not Smaller Than Target
 */

function first_not_smaller(arr, target) {
    if (!arr || !arr.length) {
        return -1;
    }
    let left = 0;
    let right = arr.length - 1;
    let boundary_index = -1;
    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        if (arr[mid] >= target) {
            boundary_index = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return boundary_index;
}
arr = [1, 3, 3, 5, 8, 8, 10], target = 2
console.log(first_not_smaller(arr, target));