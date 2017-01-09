// Script to find the prime factors
// In this post, i tried with finding the prime factors.
// For more clarity and explanation look into https://www.khanacademy.org/math/pre-algebra/pre-algebra-factors-multiples/pre-algebra-prime-factorization-prealg/v/prime-factorization

var primeFactors = (function() {
  var primes = [];
  return {
    getPrimeFactors: getPrimeFactors
  };

  function getPrimeFactors(val){
    var i =2;
    var primeFactors = [];
    while(val > 2){
      if(val % i === 0){
        val = val/i;
        primeFactors.push(i);
      }else{
        i++;
      }
    }
    return primeFactors;
  }
})();
