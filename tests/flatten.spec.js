var expect = require('expect.js');
require('../misc/flatten.js');
describe('flatten function', function(){
  it('should be defined', function(){
    var arr = [1, 3, 2, [4, [6, [8], 7], 5], 9];
       expect(flatten).to.be.a('function');
  });
});
