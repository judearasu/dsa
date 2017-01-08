// Script to determine prime number or not ?
var primeNumber = (function() {
  var divisor = 2;
  return {isPrime: isPrime};
  function isPrime(val){
    if(val === divisor){
      return true;
    }
    if(val === 1){
      return false;
    }
    var sqrt = Math.sqrt(val);
    while(divisor <= sqrt){
      if(val % divisor === 0){
        return false;
      }
      divisor ++;
    }
    return true;
  }

})();
