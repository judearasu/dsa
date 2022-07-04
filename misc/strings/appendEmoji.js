/**
 * 
 * @param {*} text can be string, object or any
 * @param {*} emoji emoji character
 */
function appendEmoji(text, emoji) {
    let outPutStr = '';
    let hasSeen = false;
    if (typeof text === 'object') {
        text = text.toString();
    }
    for (let startIdx = 0; startIdx < text.length; startIdx++) {
        if (text[startIdx].match(/\s/g)) {
            outPutStr += emoji;
            hasSeen = true;
        } else {
            outPutStr += text[startIdx];

        }

    }
    return hasSeen ? outPutStr : "invalid string";
}

console.log(appendEmoji({ hello: 'world' }, '🙃'))



// console.log(typeof message, message);
// let outPutStr = '';
// let hasSeen = false;
// if(message){
// message = message.toString();
// for(let startIdx = 0; startIdx < message.length; startIdx++){
//     if(message[startIdx].match(/\s/g)){
//         outPutStr += emoji;
//         hasSeen = true;
//     }else{
//         outPutStr +=message[startIdx];        
//     }
// }
// }
// return hasSeen ? outPutStr : "invalid string";