/**
 * Balanced Brackets
 */

function balancedBrackets(string) {
    // Write your code here.
    if (!string || !string.length) {
        return false;
    }

    let stack = [];
    for (character of string) {
        if (character === '(' || character === '[' || character === '{') {
            stack.push(character);
        }
        else if (character === ')' && stack.length !== 0 && stack[stack.length - 1] === '(') {
            stack.pop();
        }
        else if (character === '}' && stack.length !== 0 && stack[stack.length - 1] === '{') {
            stack.pop();
        }
        else if (character === ']' && stack.length !== 0 && stack[stack.length - 1] === '[') {
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

console.log(balancedBrackets(string = "([])(){}(())()()"));