describe('Print All k size subset of given array of size n', function() {
  it('should be defined', function(){
    expect(subsetArray).to.be.defined;
  });
  it('should accept two parameters', function(){
    expect(subsetArray.getResult).to.have.length(2);
  });
  it('should return the subset', function(){
    var arr = [1, 2, 3, 4,5,6,7,8,9];
     console.log(subsetArray.getResult(arr,2));
  })
});
