/**
 * 139. Word Break
 * https://leetcode.com/problems/word-break/
 */
var wordBreak = function (s, wordDict) {
    let concatStr = '';
    let start = 0;
    while (start < wordDict.length) {
        concatStr = concatStr + wordDict[start];
        start++;
    }
    if (s === concatStr) {
        return true;
    } else if (s !== concatStr) {
        return conCatWord(s, concatStr, wordDict);
    }
};


var conCatWord = function (s, concatStr, wordDict) {
    let start = 0;
    let outPut = false;
    while (start < wordDict.length) {
        concatStr = concatStr + wordDict[start];
        if (s === concatStr) {
            outPut = true;
            break;
        } else {
            if (concatStr.length <= s.length) {
                conCatWord(s, concatStr, wordDict);
            } else {
                outPut = false;
                break;
            }
            start++;
        }

    }
    return outPut;
}

s = "bb", wordDict = [["a", "b", "bbb", "bbbb"]]
console.log(wordBreak(s, wordDict));
