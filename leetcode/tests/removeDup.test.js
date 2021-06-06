const removeDup = require('../problems/removeDup');

describe("removeDup", () => {
    describe("should check the input nums", () => {
        test("should check the input argument [1,1,2]", () => {
            expect(removeDup([1, 1, 2])).toEqual(2);
        });

        test("should check the input argument [0,0,1,1,1,2,2,3,3,4]", () => {
            expect(removeDup([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])).toEqual(5);
        });
    });
});

