const multiplyInto20 = function(arr) {

  // loop through numbers in array
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] * arr[j] === 20) {
        return true;
      }
    };
  };
  return false;

};
