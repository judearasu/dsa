describe.only('flatten function', function() {
  it('should be defined', function() {
    expect(flatten).to.be.a('function');
  });
  it('should sort and flatten the array', function() {
    var arr = [1, 3, 2, [4, [6, [8], 7], 5], 9];
    console.log(flatten(arr));
  })
});
