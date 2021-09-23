/**
 * 1010. Pairs of Songs With Total Durations Divisible by 60
 * https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/
 */

var numPairsDivisibleBy60 = function (time) {
    if (!time || !time.length) {
        return null;
    }
    let count = 0;
    for(let x = 0 ; x < time.length; x++){
        for(let y = x+1; y< time.length; y++){
            let remainder = (time[x]+time[y])% 60;
            if(remainder === 0){
                count++;
            }
        }
    }
    return count;
};


// console.log(numPairsDivisibleBy60(time = [30, 20, 150, 100, 40]))
// console.log(numPairsDivisibleBy60(time = [60,60,60]));