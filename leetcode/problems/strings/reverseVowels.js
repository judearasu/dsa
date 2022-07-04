/**
 * 345. Reverse Vowels of a String
 * https://leetcode.com/problems/reverse-vowels-of-a-string/
 */

var reverseVowels = function (s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    s = s.split('');
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (!(vowels.includes(s[left]))) {
            left++;
        } else if (!(vowels.includes(s[right]))) {
            right--;
        } else {
            let temp = s[right];
            s[right] = s[left];
            s[left] = temp;
            left++;
            right--;
        }
    }
    return s.join('');
}
console.log(reverseVowels("Aa"));
