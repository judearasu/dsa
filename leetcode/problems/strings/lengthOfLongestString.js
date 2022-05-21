/**
 * 3. Longest Substring Without Repeating Characters
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/
 */

var lengthOfLongestSubstring = function (s) {
    // OP
    // const charSet = new Set();
    // let left = 0;
    // let right = 0;
    // let max = 0;
    // while (right < s.length) {
    //     if (!charSet.has(s.charAt(right))) {
    //         charSet.add(s.charAt(right));
    //         right++;
    //         max = Math.max(charSet.size, max);
    //     } else {
    //         charSet.delete(s.charAt(left))
    //         left++;
    //     }
    // }
    // return max;
    // BT
    if (s.length <= 1) return s.length;

    let longest = 0;
    for (let left = 0; left < s.length; left++) {
        let seenChars = {}; currentLength = 0;
        for (let right = left; right < s.length; right++) {
            const currentChar = s[right];
            if (!seenChars[currentChar]) {
                seenChars[currentChar] = true;
                currentLength++;
                longest = Math.max(longest, currentLength);
            } else {
                break;
            }
        }
    }
    return longest;


};

console.log(lengthOfLongestSubstring('clementisacap'));