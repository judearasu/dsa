/**
 * 442. Find all duplicates in an array
 * https://leetcode.com/problems/find-all-duplicates-in-an-array/
 */

var findDuplicates = function(nums){
    if(!nums || !nums.length){
        return [];
    }
    let list = {};
    let seen = [];
    for(let x=0;x<nums.length; x++){
        if(nums[x] in list){
            seen.push(nums[x])
        }else{
            list[nums[x]] = nums[x];
        }
    }
    return seen;
}

console.log(findDuplicates(nums = [1,1,2]))