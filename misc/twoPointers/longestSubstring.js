/**
 * Longest Substring without Repeating Characters
 * https://www.educative.io/courses/algorithms-ds-interview/m2Y4B8MDkOR
 */

var longest_substring_without_repeating_characters = function (s) {
    const strLen = s.length;
    let longest = 0;
    let left = 0;
    let right = 0;
    let window = new Set();
    while (right < strLen) {
        if (!window.has(s.charAt(right))) {
            window.add(s.charAt(right));
            right++;
            longest = Math.max(window.size, longest);
        } else {
            window.delete(s.charAt(left));
            left++;
        }
        // longest = Math.max(longest, right - left);
    }
    return longest;

}
console.log(longest_substring_without_repeating_characters("abcdbea"))