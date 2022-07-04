/**
 * 290. Word Pattern
 * https://leetcode.com/problems/word-pattern/
 */
var wordPattern = function (pattern, s) {
    let hashMap = new Map();
    const words = s.split(/\s+/);
    if (words.length !== pattern.length) return false;
    if (new Set(words).size !== new Set(pattern).size) return false;
    for (let start = 0; start < pattern.length; start++) {
        if (hashMap.has(pattern[start]) && hashMap.get(pattern[start]) !== words[start]) {
            return false;
        }
        hashMap.set(pattern[start], words[start]);
    }
    return true;
}
console.log(wordPattern(pattern = "abba", s = "dog dog dog dog"))