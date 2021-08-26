const anaGrams = require('./index');

test('AnaGram function exists',() =>{
    expect(anaGrams).toBeDefined();
})


test('rail safety === fairy tales',() =>{
    expect(anaGrams('rail Safety')).toBe('fairy tales');
})