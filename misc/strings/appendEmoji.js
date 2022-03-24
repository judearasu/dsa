/**
 * 
 * @param {*} text can be string, object or any
 * @param {*} emoji emoji character
 */
function appendEmoji(text, emoji) {
    let outPutStr = '';
    let hasSeen = false;
    if (typeof text === 'object') {
        text = text.toString().toLowerCase();
    }
    for (let startIdx = 0; startIdx < text.length; startIdx++) {
        if (text[startIdx].match(/[a-z]/i)) {
            outPutStr += text[startIdx];
        } else {
            outPutStr += emoji;
            hasSeen = true;
        }

    }
    return hasSeen ? outPutStr : "invalid string";
}

console.log(appendEmoji('hello world', '🙃'))