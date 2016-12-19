// Write a program that prints out the numbers 1 to 100 (inclusive).
// If the number is divisible by 3, print Crackle instead of the number.
// If it's divisible by 5, print Pop. If it's divisible by both 3 and 5, print CracklePop.
// You can use any language.

var cracklePop = (function() {

  var divisor =  function(data){
      for(var i=1; i <= data; i++){
        console.log(this.textGen(i));
      }
  };

  var textGen = function(value){
    if(value %3 === 0 && value %5 ===0){
      return 'CracklePop';
    }else if(value%3 === 0){
      return 'Crackle';
    }else if(value%5 === 0){
      return 'Pop';
    }else{
      return value;
    }
  };
	return {
    divisor : divisor,
    textGen : textGen
  };

})();
