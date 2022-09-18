/**
 * 724. Find Pivot Index
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftMap = new Map();
  let rightMap = new Map();
  let temp = 0;
  for (let x = 0; x < nums.length; x++) {
    leftMap.set(x, temp);
    temp += nums[x];
  }
  temp = 0;
  for (let x = nums.length - 1; x >= 0; x--) {
    rightMap.set(x, temp);
    temp += nums[x];
  }
  for (let x = 0; x < nums.length; x++) {
    if (leftMap.get(x) === rightMap.get(x)) {
      return x;
    }
  }

  return -1;
};
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
