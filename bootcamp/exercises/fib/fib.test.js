const reverse = require('./index');

test('Reverse function exists', () =>{
    expect(reverse).toBeDefined();
});

test('Reverse a string',() =>{
    expect(reverse('abc')).toBe('cba');
})

test('Reverse a string', () =>{
    expect(reverse('xyz')).toBe('zyx');
})

test('Reverse a string', () =>{
    expect(reverse('123')).toBe('321');
})