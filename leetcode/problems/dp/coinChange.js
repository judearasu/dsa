/**
 * https://leetcode.com/problems/coin-change/
 * Coin Change
 */

var coinChange = function (coins, amount) {
    if (amount === 0) {
        return 0;
    }
    let result = Number.MAX_SAFE_INTEGER;
    for (let coin of coins) {
        if (coin <= amount) {
            result = Math.min(result, coinChange(coins, amount - coin) + 1);
        }
    }
    return result;
};
coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount));