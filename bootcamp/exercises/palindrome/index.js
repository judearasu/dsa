// Given a string return true if the string is palindrome.

function palindrome(str){
    return str.split('').every((char, i) => char === str[str.length -(i +1)])
}

module.exports = palindrome;


// let reversed = str.split('').reduce((reversed, character)=>character + reversed, '');
// return reversed === str;