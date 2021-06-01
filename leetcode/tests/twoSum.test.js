const twoSum = require('../problems/twoSum');

describe("twoSum", () => {
    describe("should check the input nums", () => {
        test("should check the input argument [2,7,11,15]", () => {
            expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
        });

        test("should check the input argument [3,2,8]", () => {
            expect(twoSum([3, 2, 8], 10)).toEqual([1, 2]);
        });

        test("should check the input argument [3,3]", () => {
            expect(twoSum([3,3], 6)).toEqual([0,1]);
        });
    });
});

