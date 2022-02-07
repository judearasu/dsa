/**
 * Reverse Words In String
 * https://www.algoexpert.io/questions/Reverse%20Words%20In%20String
 * String
 */

function reverseWordsInString(string) {
    const characters = [];
    for (const char of string) {
        characters.push(char);
    }
    reverseListRange(characters, 0, characters.length - 1);

    let startOfWord = 0;
    while (startOfWord < characters.length) {
        let endOfword = startOfWord;
        while (endOfword < characters.length && characters[endOfword] !== '') {
            endOfword++;
        }
        reverseListRange(characters, startOfWord, endOfword - 1);
        startOfWord = endOfword + 1;
    }
    return characters.join("");
}

function reverseListRange(list, start, end) {
    while (start < end) {
        const temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}

exports.reverseWordsInString = reverseWordsInString;

console.log(reverseWordsInString("whitespaces    4"))