/**
 *  Search Insert Position- Easy - Array
 *  https://leetcode.com/problems/search-insert-position/
 */

var searchInsert = function (nums, target) {
    let position = 0;
    position = nums.indexOf(target)
    if (position === -1) {
       nums.push(target);
       nums.sort((a,b)=>a-b);
       position = nums.indexOf(target);
    }
    return position;
};

module.exports = searchInsert;