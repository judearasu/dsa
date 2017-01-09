describe.only('PrimeFactors function', function() {
  it('should be defined', function() {
    expect(primeFactors).to.be.instanceOf(Object);
  });

  describe('getPrimeFactor', function(){
    it('should have method getPrimeFactor', function(){
      expect(typeof primeFactors.getPrimeFactors).to.be.equal('function');
    });
    it('should accept one parameter', function(){
      expect(primeFactors.getPrimeFactors).to.have.length(1);
    });
    it('should find the prime factors for 69', function(){
      console.log(primeFactors.getPrimeFactors(69));
    });

  });
});
