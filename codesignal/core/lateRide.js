/**
 * https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L
 */

var lateRide = function (n) {
    let mins = Math.floor(n / 60);
    let hours = Math.floor(n % 60);
    return (countIntegers(mins) + countIntegers(hours))
}

var countIntegers = function (n) {
    let sum = 0;
    while (n > 0) {
        sum = 1 * sum + (n % 10)
        n = Math.floor(n / 10);
    }
    return sum;
}

console.log(lateRide(808));