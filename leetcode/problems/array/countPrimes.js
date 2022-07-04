/**
 * 204. Count Primes
 * https://leetcode.com/problems/count-primes/
 */

var countPrimes = function (n) {
    const map = new Array(n).fill(false);
    for (let i = 2; i < n; i++) {
        map[i] = true;
    }
    for (let i = 2; i * i < map.length; i++) {
        if (map[i]) {
            for (let j = i; j * i < map.length; j++) {
                map[i * j] = false;
            }
        }
    }
    let primeCount = 0;
    for (let x = 2; x < map.length; x++) {
        if (map[x]) {
            primeCount++;
        }
    }
    return primeCount;
}
console.log(countPrimes(10));