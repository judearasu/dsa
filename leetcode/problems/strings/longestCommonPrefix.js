/**
 * 14.Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/solution/
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return "";
    let s = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(s) !== 0) {
            s = s.substring(0, s.length - 1);
        }
    }
    return s;
}
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs))