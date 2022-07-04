/**
 * 1672. Richest Customer Wealth
 */
var maximumWealth = function (accounts) {
    if (!accounts || !accounts.length) {
        return null;
    }
    let maxWealth =0;
    for(let start=0; start < accounts.length; start++){
        const sum = accounts[start].reduce((previousValue, currentValue) => previousValue  + currentValue, 0);
        maxWealth  = Math.max(maxWealth, sum);
    }
    return maxWealth;
}

console.log(maximumWealth([[1, 2, 3], [3, 2, 1]]));
console.log(maximumWealth([[1,5],[7,3],[3,5]]));