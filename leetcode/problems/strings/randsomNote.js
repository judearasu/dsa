/**
 * 383. Ranson Note
 * https://leetcode.com/problems/ransom-note/
 */
var canConstruct = function (ransomNote, magazine) {
    magazine = [...magazine];
    for (const letter of ransomNote) {
        const index = magazine.indexOf(letter);
        if (index < 0) {
            return false;
        }
        magazine[index] = null;
    }
    return true;
};

ransomNote = "bg"
magazine = "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"

console.log(canConstruct(ransomNote, magazine))