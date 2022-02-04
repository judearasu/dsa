/**
 *58. Length of Last word
 */

var lengthOfLastWord = function (s) {
    s = s.split(' ');
    let wordSet = [];
    for (let word of s) {
        if (word) {
            wordSet.push(word.length);
        }
    }
    return wordSet[wordSet.length - 1];
};

console.log(lengthOfLastWord(s = "Hello World"))