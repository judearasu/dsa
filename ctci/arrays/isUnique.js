/**
 * Is Unique
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */
function isUnique(str) {
    let strArr = str.split('');
    let strMap = {};
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] in strMap) {
            strMap[strArr[i]] = strMap[strArr[i]] + 1;
            return false;
        } else {
            strMap[strArr[i]] = 1;
        }
    }
    return true;
}
console.log(isUnique(str = 'Thillai'));
module.exports = isUnique;