// Reverse a integer

function reverseInt(num){
    let sign = Math.sign(num);
    let reversedNum =  String(num).split('').reduce((rev, char) => char + rev, '');
    reversedNum = sign * parseInt(reversedNum, 10);
    return reversedNum;
}
module.exports = reverseInt;