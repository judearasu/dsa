/**
 *  Remove duplicates from sorted Array - Easy - Array
 *  https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */ 

var removeDuplicates = function(nums){
    // let inputNums = [];
    // for(let i=0; i<nums.length;i++){
    //     if(inputNums.indexOf(nums[i]) === -1){
    //         inputNums.push(nums[i]);
    //     }
    // }
    // console.log(inputNums);
    // return inputNums.length;
    if(!nums.length){
        return 0;
    }
    let iterator = 1;
    for(let i=0; i< nums.length -1; i++){
        if(nums[i] !== nums[i+1]){
            nums[iterator] = nums[i+1];
            iterator++;
        }
    }
    return iterator;
}

module.exports = removeDuplicates;