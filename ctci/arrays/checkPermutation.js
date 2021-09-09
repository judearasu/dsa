/**
 * Check Permutation
 * Given two strings, write a method to decide if one is a permutation of the other.
 * Ex : Str1 = 'abcd' Str2 = 'abdc';
 */

function checkPermutation(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let n1 = str1.split('').sort();
    let n2 = str2.split('').sort();
    for(let i=0; i<n1.length; i++){
        if(n1[i] === n2[i]){
            return true;
        }else{
            return false;
        }
    }
}
module.exports = checkPermutation;
console.log(checkPermutation('abcd', 'thil'));