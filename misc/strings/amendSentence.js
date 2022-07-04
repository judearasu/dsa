// You have been given a string s, which is supposed to be a sentence. However, someone forgot to put spaces between the different words, and for some reason they capitalized the first letter of every word. Return the sentence after making the following amendments:

// Put a single space between the words.
// Convert the uppercase letters to lowercase.

function solution(s) {
    let strLength = s.length;
    let newStr = '';
    let start = 0;
    while (start < strLength) {
        if (s.charCodeAt(start) >= "A".charCodeAt() && s.charCodeAt(start) <= "Z".charCodeAt()) {
            let lowerCase = String.fromCharCode(s.charCodeAt(start) + 32);
            if (start !== 0) {
                newStr += " " + lowerCase;
            } else {
                newStr += lowerCase;
            }
        } else {
            newStr += s[start];
        }
        start++;
    }
    return newStr;
}
console.log(solution(s = "CodesignalIsAwesome"))