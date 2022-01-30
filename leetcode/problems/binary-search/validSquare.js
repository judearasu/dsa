/**
 * 367. Valid Perfect Square
 * https://leetcode.com/problems/valid-perfect-square/
 */
var isPerfectSquare = function (num) {
    if (num < 2) {
        return true;
    }
    let left = 2;
    let right = Math.floor(num / 2);

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let guessedSq = mid * mid;
        if (guessedSq === num) {
            return true;
        }
        if (guessedSq > num) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return false;
};