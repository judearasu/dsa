describe.only('PrimeNumber function', function() {
  it('should be defined', function() {
    expect(primeNumber).to.be.instanceOf(Object);
  });

  describe('isPrime function', function(){
    it('should be a function', function(){
      expect(typeof primeNumber.isPrime).to.equal('function');
    });
    it('pass value 2 and function should return true if it is prime', function() {
      expect(primeNumber.isPrime(2)).to.be.true;
    });
    it('pass value 1 and function should return false if it is prime', function() {
      expect(primeNumber.isPrime(1)).to.be.false;
    });
    it('pass value 4 and function should return false if it is prime', function() {
      expect(primeNumber.isPrime(4)).to.be.false;
    });
  });

});
