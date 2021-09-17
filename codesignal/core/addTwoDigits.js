/**
 * You are given a two-digit integer n. Return the sum of its digits.
 * https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66
 */

var addTwoDigits = function (n) {
    let sum = 0;
    while (n > 0) {
        sum = 1 * sum + (n % 10)
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(addTwoDigits(291));