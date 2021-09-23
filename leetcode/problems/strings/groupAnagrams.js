/**
 * 49. Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
   Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 */

var groupAnagrams = function(strs){
    if(!strs || !strs.length){
        return null;
    }
    let anagrams = {};
    for(let x=0; x < strs.length; x++){
        let sortedWord = strs[x].split('').sort().join();
        if(sortedWord in anagrams){
            anagrams[sortedWord].push(strs[x])
        }else{
            anagrams[sortedWord] = [strs[x]];
        }
    }
    return Object.values(anagrams);
}
console.log(groupAnagrams(strs = ["eat","tea","tan","ate","nat","bat"]))
