/**
 * 283. Move Zeroes
 * https://leetcode.com/problems/move-zeroes/
 */
var moveZeroes = function(nums){
    if(!nums || !nums.length){
        return null;
    }
    let zerosArr = [];
    let nonZeroArr = [];
    for(char of nums){
        if(char !== 0){
            nonZeroArr.push(char)
        }else{
            zerosArr.push(char);
        }
    }
    return nonZeroArr.concat(zerosArr);
}
console.log(moveZeroes(nums = [0]))