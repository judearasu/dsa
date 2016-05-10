describe('euclideangcd function', function(){
  it('should be defined', function(){
    expect(euclidean_gcd).to.be.a('function');
  })
  it('should accept two arguments', function(){
    expect(euclidean_gcd).to.have.length(2);
  })
  it('should find the GCD for value 4,5', function(){
    expect(euclidean_gcd(4,5)).to.equal(1);
  });
});
