/**
 * Given an integer n, return the largest number that contains exactly n digits.
 * https://app.codesignal.com/arcade/code-arcade/intro-gates/SZB5XypsMokGusDhX
 */

var largestNumber = function(n){
    let largest = 1;
    let x = 1;
    while(x<=n){
        largest *=10
        x++;
    }
    return largest -1;
}
console.log(largestNumber(3))

// answer = 10 * answer + (number % 10)
// number = Math.floor(number / 10);