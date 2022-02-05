/**
 * 389. Find the difference
 * https://leetcode.com/problems/find-the-difference/
 */
var findTheDifference = function (s, t) {
    s = s.split('').sort();
    t = t.split('').sort();
    // for (let start = 0; start < s.length; start++) {
    //     const index = t.indexOf(s[start]);
    //     if (index > -1) {
    //         t.splice(index, 1);
    //     }
    // }
    // return t.join('');
    let start = 0;
    while (start < s.length) {
        if (s[start] !== t[start]) {
            return t[start];
        }
        start++;
    }
    return t[start];
}
console.log(findTheDifference(s = "abcd", t = "eabcd"))