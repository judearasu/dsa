/**
 *  Two Sum - Easy - Array
 *  https://leetcode.com/problems/two-sum/
 */ 

 var twoSum = function (nums, target){
    //  let result  = [];
    //  for(let i=0; i< nums.length; i++){
    //      for(let j=i+1; j < nums.length; j++){
    //         if(nums[i] + nums[j] === target) {
    //             result.push(i); 
    //             result.push(j);
    //         }
    //      }
    //  }
    //  return result;
    let map = {};
    for(let i=0; i<nums.length; i++){
         map[nums[i]] = i;
         let diff = target - nums[i];
         if(diff in map){
            return (map[diff], i);
         }
    }
 }

 // console.log(twoSum([2,7,11,15], 9));
 console.log(twoSum[3,2,4],6);
 module.exports = twoSum;