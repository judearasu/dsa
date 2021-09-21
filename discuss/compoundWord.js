/**
 * This was a common question asked on Uber and Amazon
 * Write a function to that takes an array of words and returns all the compound words and the word parts. 
 * A compound word is made of two word parts. For example, the compound word 'highway' is made up of the word parts 'high' and 'way'. 
 */
let words = ['star', 'rock', 'rockstar', 'rocks', 'tar', 'super', 'highway', 'superhighway', 'high', 'way'];
var getCompoundWords = function(words){
    if(!words || !words.length){
        return null;
    }
    let returnVal = [];
    for(let x=0; x<words.length; x++){
        // const matching = words.filter((word, i) => {
        //     if (i === x) {
        //         return false
        //     }
        //     return word.includes(words[x])
        // })
        // console.log(words[x], matching)
        for(let y=0; y<words.length; y++){
            for (let z=0; z<words.length;z++) {
                const compound = words[x];
                const part1 = words[y];
                const part2 = words[z];
                if (part1 + part2 === compound) {
                   returnVal.push({compound, word: [part1, part2]})
                }
            }
        }
    }
    return returnVal;
}
console.log(getCompoundWords(words));