/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

var lengthOfLongestSubstring = function (s) {
    const charSet = new Set();
    let left = 0;
    let res = 0;
    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left])
            left += 1;
        }
        charSet.add(s[right]);
        res = Math.max(res, right - left + 1);
    }
    return res;
};

console.log(lengthOfLongestSubstring('pwwkew'));