const arrChunk = require('./index');

test('Array Chunk function exists', () =>{
    expect(arrChunk).toBeDefined();
})

test('Array Chunk [1,2,3,4,5], 4', () =>{
    expect(arrChunk([1,2,3,4,5], 4)).toEqual([[1,2,3,4],[5]])
})


test('Array Chunk [1,2,3,4,5], 10', () =>{
    expect(arrChunk([1,2,3,4,5], 10)).toEqual([[1,2,3,4,5]])
})