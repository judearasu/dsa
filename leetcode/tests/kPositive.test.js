const kPositiveNumber = require('../problems/kPositiveNumber');
describe.skip("kPositiveNumber", () => {
    describe("should check the input nums", () => {
        test("should check the input arr = [2,3,4,7,11], k = 5", () => {
            expect(kPositiveNumber([1, 2, 3, 4], 2)).toEqual(6);
        });
    });
});
