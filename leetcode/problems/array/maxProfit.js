/**
 * Best Time to Buy and Sell Stock
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let left = 0;
    let right = 0;
    let maxP = 0;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left];
            maxP = Math.max(profit, maxP);
        }else{
            left = right;
        }
        right +=1;
    }
    return maxP;
};
module.exports = maxProfit;

console.log(maxProfit(prices = [7, 1, 5, 3, 6, 4]));