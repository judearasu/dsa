/**
 * Reverse Integer
 * https://leetcode.com/problems/reverse-integer/
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let answer = 0;
    let sign = 1;
    if (x < 0) { sign = -1; };
    let number = Math.abs(x);
    while (number > 0) {
        answer = 10 * answer + (number % 10)
        number = Math.floor(number / 10);

    }
    if ((answer > Math.pow(2, 31)) || (answer < Math.pow(-2, 31))) {
        return 0;
    }
    return sign * answer;
};
console.log(reverse(123));
module.exports = reverse;