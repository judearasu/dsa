const largestUniqueNumber = require('../problems/largestUniqueNumber');

describe("largestUniqueNumber", () => {
    describe("should check the input nums", () => {
        test("should check the input argument 5, 7, 3, 9, 4, 9, 8, 3, 1]", () => {
            expect(largestUniqueNumber([5, 7, 3, 9, 4, 9, 8, 3, 1])).toEqual(8);
        });
        test("should check the input argument [9, 9, 8, 8]", () => {
            expect(largestUniqueNumber([9, 9, 8, 8])).toEqual(-1);
        });
    });
});

