/**
 * Jump Game
 * https://leetcode.com/problems/jump-game/
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let lastGoodPosition = nums.length -1;
    for(let x = nums.length -1; x >=0 ; x--){
        if(x + nums[x] >= lastGoodPosition){
            lastGoodPosition = x;
        }
    }
    return lastGoodPosition === 0;
};


console.log(canJump(nums = [2, 3, 1, 1, 4]))