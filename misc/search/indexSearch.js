/**
 * Finding the boundary
 */

function find_boundary(arr) {
    if (!arr || !arr.length) {
        return -1;
    }
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = left + Math.trunc((right - left) / 2);
        if (arr[mid] && !arr[mid - 1]) {
            return mid;
        } else if (!arr[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

console.log(find_boundary(arr = [true, true, true, true, true]));

