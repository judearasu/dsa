const searchInsert = require('../problems/searchInsPos');

describe('Search Input Pos', () => {
    test('Should check for the input nums = [1,3,5,6], target = 5', () => {
        expect(searchInsert([1,3,5,6], 5)).toEqual(2);
    })
    test('Should check for the input nums = [1,3,5,6], target = 2', () => {
        expect(searchInsert([1,3,5,6], 2)).toEqual(1);
    })
    test('Should check for the input nums = [1,3,5,6], target = 7', () => {
        expect(searchInsert([1,3,5,6], 7)).toEqual(4);
    })
    test('Should check for the input nums = [1,3,5,6], target = 0', () => {
        expect(searchInsert([1,3,5,6], 0)).toEqual(0);
    })
    test('Should check for the input nums = [1], target = 0', () => {
        expect(searchInsert([1], 0)).toEqual(0);
    })
})