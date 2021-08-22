/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let start = 0;
    let len = nums.length;
    let missedNumber = 0;
    while(start<=len){
      if(!(nums.includes(start))){
        missedNumber = start;
      }
      start++;
    }
    return missedNumber;
};