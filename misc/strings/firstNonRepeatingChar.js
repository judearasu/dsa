/**
 * First Non Repeating  Character
 */
function firstNonRepeatingCharacter(string) {
    // Write your code here.
    let dict = {};
    for (let char = 0; char < string.length; char++) {
        if (!(string[char] in dict)) {
            dict[string[char]] = char;
        } else {
            dict[string[char]] = -1;
        }

    }
    for (let char in dict) {
        if (dict[char] >= 0) {
            return dict[char];
        }
    }
    return -1;
}

console.log(firstNonRepeatingCharacter(string = "abcdcaf"))