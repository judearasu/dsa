/**
 *  Best Time to Buy and Sell Stock
 *  https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

var maxProfit = function (prices) {
    let max_profit = 0;
    let min_price = Number.POSITIVE_INFINITY;
    for (let price of prices) {
        min_price = Math.min(price, min_price);
        let profit = price - min_price;
        max_profit = Math.max(max_profit, profit);
    }
    return max_profit;
}
console.log(maxProfit(prices = [7,6,4,3,1]))