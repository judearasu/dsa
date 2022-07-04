/**
 * Is Unique
 * Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?
 */
function isUnique(str) {
    if(str.length > 128){
        return false;
    }
    let strMap = {};
    for (let i = 0; i < str.length; i++) {
        let val = str.charAt(i);
        if (val in strMap) {
            strMap[val] = strMap[val] + 1;
            return false;
        } else {
            strMap[val] = 1;
        }
    }
    return true;
}
console.log(isUnique(str = 'Than'));
module.exports = isUnique;