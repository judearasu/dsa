// Given a string, return a new string with reversed order

function reverse(str){
    return str.split('').reduce((reversed, character)=>{
        return character + reversed;
    }, '');
}
module.exports = reverse;


// let reversed  = '';
// for(let character of str){
//     reversed = character + reversed;
// }
// return reversed;

// function reverse(str){
//     const arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }