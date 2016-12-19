describe('Write a program that prints out the numbers 1 to 100,  divisible by 3,5 or both', function() {
  it('should be defined', function(){
    expect(cracklePop).to.be.defined;
  });

  it('should be an instance of object', function(){
    expect(cracklePop).to.be.an.instanceOf(Object);
  });
  describe('should validate the internal methods', function(){
    it('should be defined', function(){
      expect(cracklePop.divisor).to.be.an.instanceOf(Object);
    });
    it('should accept one parameter', function(){
      expect(cracklePop.divisor).to.have.length(1);
    });

    it('should be divisible by 3, then print Crackle', function(){
      console.log(cracklePop.divisor(100));
    });
  });
});
