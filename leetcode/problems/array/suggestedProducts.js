/**
 * 1268. Search Suggested System
 * https://leetcode.com/problems/search-suggestions-system/
 */

var suggestedProducts = function (products, searchWord) {
    products = products.sort((a, b) => a.localeCompare(b));

    console.log(products[0]);
}
products = ["mobile", "mouse", "moneypot", "monitor", "mousepad"], searchWord = "mouse"
console.log(suggestedProducts(products, searchWord))