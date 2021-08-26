/**
 *  Remove Element - Easy - Array
 *  https://leetcode.com/problems/remove-element/
 */

var removeElement = function (nums, val) {
    // while(nums.indexOf(val)!==-1){
    //     nums.splice(nums.indexOf(val),1)
    // }
    // return nums.length
    if (!nums.length) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return nums.length;
};

module.exports = removeElement;