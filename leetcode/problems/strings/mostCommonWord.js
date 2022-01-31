/**
 * 819. Most Common Word
 * https://leetcode.com/problems/most-common-word/
 */

var mostCommonWord = function (paragraph, banned) {
    paragraph = paragraph.toLowerCase().split(' ');
    let wordMap = new Map();
    for (let word of paragraph) {
        word = word.replace(/\W/g, '');
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1)
        } else {
            wordMap.set(word, 1);
        }
    }
    if (banned.length > 0) {
        banned.forEach((ban) => {
            wordMap.delete(ban.toLowerCase());
        })
    }
    let maxFreq = 0, maxFreqWord = "";
    for (let [word, freq] of wordMap) {
        if (freq > maxFreq) {
            maxFreq = freq;
            maxFreqWord = word;
        }
    }
    return maxFreqWord;
}
paragraph = "a, a, a, a, b, b, b, c, c", banned = ["a"]
console.log(mostCommonWord(paragraph, banned));