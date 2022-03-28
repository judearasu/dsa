/**
 * https://leetcode.com/problems/coin-change/
 * Coin Change
 */

var coinChange = function (coins, amount) {
    const combinations = new Array(amount + 1).fill(Infinity);
    combinations[0] = 0;
    for (let coin of coins) {
        for (let start = 1; start < combinations.length; start++) {
            if (coin <= start) {
                let idx = start - coin;
                let potAmt = combinations[idx] + 1;
                combinations[start] = Math.min(potAmt, combinations[start])
            }
        }
    }
    return combinations[combinations.length - 1] === Infinity ? -1 : combinations[combinations.length - 1];
};
coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount));