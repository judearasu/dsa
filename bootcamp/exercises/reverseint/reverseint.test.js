const reverseInt = require('./index');

test('Reverse Int function exists', () => {
    expect(reverseInt).toBeDefined();
})


test('Reverse 123', () => {
    expect(reverseInt(123)).toBe(321);
})

test('Reverse -15', () => {
    expect(reverseInt(-15)).toBe(-51);
})

test('Reverse -90', () => {
    expect(reverseInt(-90)).toBe(-9);
})

test('Reverse 500', () => {
    expect(reverseInt(500)).toBe(5);
})

test('Reverse 981', () => {
    expect(reverseInt(981)).toBe(189);
})

test('Reverse 15', () => {
    expect(reverseInt(15)).toBe(51);
})