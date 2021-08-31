/**
 * Sales by Match
 */

function sockMerchant(n, ar) {
    let sockObj = {};
    let iterator = 0;
    let count = 0;
    while (iterator < n) {
        if(!(ar[iterator] in sockObj)){
            sockObj[ar[iterator]] = 1;
        }else{
            sockObj[ar[iterator]] = sockObj[ar[iterator]] + 1;
        }
        iterator++;
    }
    for(let sock in sockObj){
       // console.log(Math.abs(sockObj[sock]/2));
    }
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));