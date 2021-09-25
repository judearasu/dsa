/**
 * Palindrome Check
 */

function isPalindromeCheck(string){
    if(!string && !string.length){
        return false;
    }
    let left = 0;
    let right = string.length -1;
    while(left < right){
        if(string[left] === string[right]){
            left++;
            right--;
        }else{
            return false;
        }
    }
    return true;
}

console.log(isPalindromeCheck(string = "abcdcba"));