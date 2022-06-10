const multiplyInto20 = function(arr) {

  // loop through numbers in array
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (i * j) {
        return true;
      } else {
        return false;
      }
    }
  }

};
