/**
 * https://leetcode.com/problems/fibonacci-number/
 * 509. Fibonacci Number
 */
fibonacci_cache = {};
var fib = function (n) {
    if (n in fibonacci_cache) {
        return fibonacci_cache[n];
    }
    let value = null;
    if (n === 1) {
        value = 1;
    } else if (n === 2) {
        value = 1;
    }
    else if (n > 2) {
        value = fib(n - 1) + fib(n - 2);
    }
    fibonacci_cache[n] = value;
    return value;
}
console.log(fib(4));