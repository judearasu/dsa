/**
 * Divide Two Integers
 * https://leetcode.com/problems/divide-two-integers/
 */
var divide = function (dividend, divisor) {
    let quotient = 0;
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    while (dividend - divisor >= 0) {
        quotient++;
        dividend = dividend - divisor;
    };

    if (sign == -1) quotient = -quotient;

    quotient = Math.min(2147483647, quotient);
    quotient = Math.max(-2147483648, quotient);
    return quotient;
}
console.log(divide(-2147483648, 1));

// if(dividend == 0){
//     return 0
// } else if (divisor == 1){
//     return dividend
// } else if(divisor == -1){
//     if(dividend == -2147483648) {
//         return 2147483647
//     }
//     return -dividend
// }

// let minus = dividend < 0 && divisor>0 || dividend > 0 && divisor <0 ? true : false
// let dd = Math.abs(dividend)
// let dv = Math.abs(divisor)
// let res = 0, i =1, tmp = dv

// while (dd >= dv){
//     i = 1
//     tmp = dv
//     while(tmp <= (dd>>1)) {
//         tmp = tmp << 1 
//         i = i << 1 
//     }
//     dd = dd - tmp 
//     res += i 
// }
// if(minus) {
//     res = -res
// } 
// return res