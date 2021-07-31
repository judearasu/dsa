//Given a string, return the character that is most commonly used in the string;
//maxChar("abccccccd") === "c";

function maxChar(str){
    let chars = {};
    let maxValue = '';
    let max = 0;
    for(let char of str){
        chars[char] = chars[char] + 1 || 1;
    }
    for(let char in  chars){
        if(chars[char] > max){
            max = chars[char];
            maxValue = char;
        }
    }
    return maxValue;
    // let value = Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
    // return value;
}

module.exports = maxChar;
