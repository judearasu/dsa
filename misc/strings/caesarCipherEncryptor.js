/**
 * Caesar Cipher Encryptor
 */

function caesarCipherEncryptor(string, key) {
    let newsLetter = [];
    let newKey = key % 26;
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (let char of string) {
        newsLetter.push(getNewLetter(char, newKey, alphabet))
    }
    return newsLetter.join('');
}

function getNewLetter(char, newKey, alphabet) {
    const newCode = alphabet.indexOf(char) + newKey;
    return alphabet[newCode % 26]
}
// Do not edit the line below.
console.log(caesarCipherEncryptor("xyz", 2))