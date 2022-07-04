/**
 * Minimum character for words
 * https://www.algoexpert.io/questions/Minimum%20Characters%20For%20Words
 * Array
 */

function minimumCharactersForWords(words) {
    let wordDict = {};
    let startIndex = 0;
    let wordFreq = new Map();
    let outPut = [];
    while (startIndex < words.length) {
        wordDict[startIndex] = {};
        for (let start = 0; start < words[startIndex].length; start++) {
            if (wordDict[startIndex][words[startIndex].charAt(start)]) {
                wordDict[startIndex][words[startIndex].charAt(start)] += 1;
            } else {
                wordDict[startIndex][words[startIndex].charAt(start)] = 1;
            }

        }
        startIndex++;
    }
    for (let wordIndex in wordDict) {
        for (let char in wordDict[wordIndex]) {
            if (wordFreq.has(char)) {
                wordFreq.set(char, Math.max(wordDict[wordIndex][char], wordFreq.get(char)));
            } else {
                wordFreq.set(char, wordDict[wordIndex][char])
            }
        }
    }
    for (const [key, value] of wordFreq) {
        for (let start = 0; start < value; start++) {
            outPut.push(key);
        }
    }
    // Count the wordDictionaries 
    return outPut;
}

// Do not edit the line below.
exports.minimumCharactersForWords = minimumCharactersForWords;

console.log(minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"]))