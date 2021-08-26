const palindrome = require('./index');

test('Palindrome function to exists',() =>{
    expect(palindrome).toBeDefined();
});

test('Check the given string is palindrome', () =>{
    expect(palindrome('abba')).toBe(true);
})

test('Check the given string is palindrome', () =>{
    expect(palindrome('abvd')).toBe(false);
})

