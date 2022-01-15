/**
 * 1859. Sorting the Sentence
 * https://leetcode.com/problems/sorting-the-sentence/
 */

var sortSentence = function (s) {
    let strArr = s.split(" ");
    let outPutStr = new Array(strArr.length);
    for (let start = 0; start < strArr.length; start++) {
        let newText = strArr[start];
        let num = parseInt(newText[newText.length - 1], 10) - 1;
        outPutStr[num] = newText.replace(/[0-9]/g, '');
    }
    return outPutStr.join(' ');
}
s = "is2 sentence4 This1 a3";
console.log(sortSentence(s));