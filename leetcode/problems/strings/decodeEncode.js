/**
 * https://leetcode.com/problems/encode-and-decode-strings/
 * 271. Encode and Decode Strings
 */

var encode = function (strs) {
    let res = '';
    for (let char of strs) {
        res += (char.length).toString() + `#` + char;
    }
    return res;
}

var decode = function (s) {
    let res = [];
    for (let i = 0; i < s.length; i++) {
        let j = i;
        while (s[j] != '#') {
            j++;
        }
        let wordLength = parseInt(s.substring(i, j));
        res.push(s.substring(j + 1, j + 1 + wordLength));
        i = j + wordLength;
    }
    return res;
}
console.log(encode(["Hello", "world"]));
console.log(decode('5#Hello6#world2'))