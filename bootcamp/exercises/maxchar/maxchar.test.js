const maxChar = require('./index');

test('MaxChar function exisits', () => {
    expect(maxChar).toBeDefined();
});

test('maxChar of "abccccccd"', () =>{
    expect(maxChar("abccccccd")).toBe("c");
})