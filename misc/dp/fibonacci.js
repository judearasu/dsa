/**
 * Calculate Fibonacci
 */

const calculateFibonacci = function (n) {
    // Memoization
    // const memoize = [];
    // function fib(n) {
    //     if (n < 2) return n;
    //     if (memoize[n]) return memoize[n];

    //     memoize[n] = fib(n - 1) + fib(n - 2);
    //     return memoize[n]
    // }
    // return fib(n);

    // Bottom Down;
    const dp = [0, 1];
    for (let x = 2; x <= n; x++) {
        dp[x] = dp[x - 1] + dp[x - 2];
    }
    return dp[n];
}


console.log(calculateFibonacci(6));