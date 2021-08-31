/**
 * Best Time to Buy and Sell Stock II
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let profit = 0;
    for(let x=0; x<prices.length;x++){
        if(prices[x] < prices [x+1]){
            profit += prices [x+1] - prices[x];
        }
    }
    return profit;
};

// console.log(maxProfit(prices = [7,1,5,3,6,4]))
// console.log(maxProfit(prices = [1,2,3,4,5]))
// console.log(maxProfit(prices = [7,6,4,3,1]))