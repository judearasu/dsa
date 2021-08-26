const removeElement = require('../problems/removeElement');

describe('should validate removeElement',() => {
    test("should check the input  nums = [3,2,2,3], val = 3", () => {
        expect(removeElement([3,2,2,3], 3)).toEqual(2);
    });

    test("should check the input argument [0,1,2,2,3,0,4,2], val = 2", () => {
        expect(removeElement([0,1,2,2,3,0,4,2], 2)).toEqual(5);
    });
})
