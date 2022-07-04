/**
 * Generate Document
 */

function generateDocument(characters, document) {
    // Write your code here.
    if (!characters || !document || !characters.length || !document.length) {
        return false;
    }
    let dictFreq = {};
    for (let x = 0; x < characters.length; x++) {
        if (!(characters[x] in dictFreq)) {
            dictFreq[characters[x]] = 0;
        }
        dictFreq[characters[x]]++;
    }
    for (let y = 0; y < document.length; y++) {
        if (!(document[y] in dictFreq) || document[y] === 0) {
            return false;
        }
        dictFreq[document[y]]--;

    }
    return true;
}

console.log(generateDocument(characters = "Bste!hetsi ogEAxpelrt x ", document = "AlgoExpert is the Best!"));
