/**
 * 242. Valid Anagram
 * https://leetcode.com/problems/valid-anagram/
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let countS = new Map();
    let countT = new Map();
    for (let start = 0; start < s.length; start++) {
        countS.set(s[start], 1 + (countS.get(s[start]) ? countS.get(s[start]) : 0));
        countT.set(t[start], 1 + (countT.get(t[start]) ? countT.get(t[start]) : 0));
    }

    for (const [key, value] of countS) {
        if (countS.get(key) !== countT.get(key)) {
            return false;
        }
    }
    return true;
}
s = "atagram";
t = "nagaram";
console.log(isAnagram(s, t))