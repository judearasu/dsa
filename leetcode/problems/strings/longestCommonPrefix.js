/**
 * 14.Longest Common Prefix
 * https://leetcode.com/problems/longest-common-prefix/solution/
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return "";
    // Brute Force
    // let s = strs[0];
    // for (let i = 1; i < strs.length; i++) {
    //     while (strs[i].indexOf(s) !== 0) {
    //         s = s.substring(0, s.length - 1);
    //     }
    // }
    // return s;

    // Optimized Approach
    strs = strs.sort((a, b) => a.localeCompare(b));
    const strLen = strs.length - 1;
    let prefixStr = "";
    for (let start = 0; start < strs[0].length; start++) {
        if (strs[0].charAt(start) === strs[strLen].charAt(start)) {
            prefixStr += strs[0].charAt(start);
        } else {
            return prefixStr;
        }
    }
    return prefixStr;
}
strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs))