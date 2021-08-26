const maxOperations = require('../problems/maxOperations');

describe("maxOPerations", ()=>{
    describe("should check the input nums", () => {
        test("nums = [1,2,3,4], k = 5",()=>{
            expect(maxOperations([1, 2, 3, 4], 5)).toEqual(2);
        });
        test("nums = [3,1,3,4,3], k = 6",()=>{
            expect(maxOperations([3,1,3,4,3], 6)).toEqual(1);
        });
    });
});