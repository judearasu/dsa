/**
 * 383. Ransom Note
 */
var canConstruct = function (ransomNote, magazine) {
    magazine = Array.from(magazine);
    for (const letter of ransomNote) {
        const index = magazine.indexOf(letter);
        if (index < 0) {
            return false;
        }
        magazine[index] = null;
        
    }
    return true;
}

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aa", "aab"));