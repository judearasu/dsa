/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length%2 !== 0) return false;
    let stack = new Array();
    for(let char of s){
      if(char === '(' || char === '{' || char === '['){
        stack.push(char);
      }else if(char === ')' && stack.length !== 0 && stack[stack.length -1] === '('){
        stack.pop();
      }else if(char === '}' && stack.length !== 0 && stack[stack.length -1] === '{'){
        stack.pop();
      }else if(char === ']' && stack.length !== 0 && stack[stack.length -1] === '['){
        stack.pop();
      }else{
        return false;
      }
    }
    return stack.length === 0;
};