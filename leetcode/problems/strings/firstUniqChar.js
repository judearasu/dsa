/**
 * 387. First Unique Character in a String
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 */

var firstUniqChar = function (s) {
    let dict = {};
    for(let char of s){
        if(char in dict){
            dict[char] = dict[char] + 1;
        }else{
            dict[char] =  1;
        }
    }
    for(let char in dict){
        if(dict[char] === 1){
            return s.split('').indexOf(char);
        }
    }
    return -1;

};

console.log(firstUniqChar(s = "leetcode"))
console.log(firstUniqChar(s = "loveleetcode"))
console.log(firstUniqChar(s = "aabb"))