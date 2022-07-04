// Given a string that represents items as asterisks (*) and compartment walls as pipes (|), a start index, and an end index, return the number of items in a closed compartment.
// Amazon interview question

function containedItems(str, start, end) {
    if (!str || !str.length) {
        return null;
    }
    const pipe_sym = '|';
    const astk_sym = '*';
    const subStr = str.substring(start, end);
    let startPointer = false;
    let endPointer = false;
    let count = 0;
    for (let startIdx = 0; startIdx < subStr.length; startIdx++) {
        if (subStr[startIdx] === pipe_sym) {
            if (!startPointer) {
                startPointer = true;
            } else if (startPointer && !endPointer) {
                endPointer = true;
            } else if (startPointer && endPointer) {
                startPointer = true;
                endPointer = false;
            }
        }
        if (startPointer) {
            if (subStr[startIdx] === astk_sym) {
                count++;
            }
        }
    }
    return subStr[subStr.length - 1] === pipe_sym ? count : count - 1;
}
console.log(containedItems('|**|*|*', 0, 5));
console.log(containedItems('|**|*|*', 0, 6));
console.log(containedItems('|**|*|*', 1, 7));