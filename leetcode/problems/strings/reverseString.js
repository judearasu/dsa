/**
 * Reverse String
 * https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/
 */

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length -1;
    while(left < right){
        let tmp = s[left];
        s[left++]=s[right];
        s[right--]=tmp;
    }
    return s;
};

console.log(reverseString(s = ["h", "e", "l", "l", "o"]));