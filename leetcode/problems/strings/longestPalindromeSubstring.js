/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
// Brute Force
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
// console.log(longestPalindrome('babad'))
var longestPalindrome2 = function (str) {
    let strLength = str.length;
    let longest = '';

    if (strLength < 2) {
        return s;
    }

    for (let start = 0; start < strLength - 1; start++) {
        let len1 = expandAroundCenter(str, start, start);
        let len2 = expandAroundCenter(str, start, start + 1);
        let longerPalindrome = len1.length > len2.length ? len1 : len2;
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        }
    }

    return longest;
}


var expandAroundCenter = function (str, begin, end) {
    while (begin >= 0 && end < str.length && str[begin] === str[end]) {
        begin--;
        end++;
    }
    return str.slice(begin + 1, end);
}
console.log(longestPalindrome2('cbbd'))