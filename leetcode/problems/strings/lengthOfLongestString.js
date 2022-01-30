/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

var lengthOfLongestSubstring = function (s) {
    const charSet = new Set();
    let left = 0;
    let right = 0;
    let max = 0;
    while (right < s.length) {
        if (!charSet.has(s.charAt(right))) {
            charSet.add(s.charAt(right));
            right++;
            console.log('right', right);
            max = Math.max(charSet.size, max);
        } else {
            charSet.delete(s.charAt(left))
            left++;
            console.log('left', left);
        }
    }
    return max;
};

console.log(lengthOfLongestSubstring('clementisacap'));