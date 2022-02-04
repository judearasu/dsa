/**
 * Plus One
 * https://leetcode.com/problems/plus-one/
 */
var plusOne = function (digits) {
    // let digitNum = 0;
    // for (let start = 0; start < digits.length; start++) {
    //     digitNum += digits[start] * (Math.pow(10, digits.length - start - 1))
    // }
    // digitNum += 1;

    // return digitNum.toString().split('');
    for (let start = digits.length - 1; start >= 0; start--) {
        digits[start]++;
        if (digits[start] > 9) {
            digits[start] = 0;
        } else {
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
}

console.log(plusOne([4, 3, 2, 1]))