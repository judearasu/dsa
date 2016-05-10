var subsetArray = (function() {
  return {
    getResult: getResult
  }

  function getResult(array, n) {

    function isBigEnough(value) {
      return value.length === n;
    }

    var ps = [
      []
    ];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0, len = ps.length; j < len; j++) {
        ps.push(ps[j].concat(array[i]));
      }
    }
    return ps.filter(isBigEnough);
  }
})();
