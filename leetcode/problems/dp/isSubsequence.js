/**
 * 392. Is Subsequence
 * https://leetcode.com/problems/is-subsequence/
 */

var isSubsequence = function (s, t) {
    let left = 0;
    let right = 0;
    while ((left < s.length) && (right < t.length)) {
        if (s[left] === t[right]) {
            left += 1;
        }
        right += 1;
    }
    return left === s.length;
}
console.log(isSubsequence(s = "abc", t = "ahbgdc"));