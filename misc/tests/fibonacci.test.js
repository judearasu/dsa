const fibonacci = require('../dp/fibonacci');
describe("Calculate Fibonacci", () => {
    describe("calculateFibonacci(5)", () => {
        test("calculateFibonacci(5)", () => {
            expect(fibonacci(5)).toEqual(5);
        });
    });
    describe("calculateFibonacci(6)", () => {
        test("calculateFibonacci(6)", () => {
            expect(fibonacci(6)).toEqual(8);
        });
    });
});
