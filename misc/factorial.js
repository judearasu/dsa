var factorial = (function() {
  var product = 1;
  return {
    getFactorial: getFactorial
  };

  function getFactorial(number) {
    for (var i = number; number >=1; --i){
        console.log(product);
      product *=i;
    }
    console.log(product);
    return product;
  }
})();
