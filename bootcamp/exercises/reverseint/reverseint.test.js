const reverseInt = require('./index');

test('Reverse Int function exists', () => {
    expect(reverseInt).toBeDefined();
})


test('Reverse 123', () => {
    expect(reverseInt(123)).toBe(321);
})