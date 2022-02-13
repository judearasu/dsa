/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let newStr = '';
    let left = 0;
    let right = 0;
    let max = 0;
    let outPut = '';
    while (right < s.length) {
        newStr += s[right];
        let res = checkPalindrome(newStr);
        if (res) {
            if (newStr.length > max) {
                outPut = newStr;
                max = newStr.length;
            }
        }
        if (right === s.length - 1) {
            newStr = '';
            left = left + 1;
            right = left;
            continue;
        }
        right++;
    }

    return outPut;

};


var checkPalindrome = function (str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}
console.log(longestPalindrome('babad'))