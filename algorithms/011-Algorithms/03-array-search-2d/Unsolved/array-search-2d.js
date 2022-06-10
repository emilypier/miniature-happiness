// Write code to create a function that accepts a two-dimensional array
// Each 2D element contains either the string "X" or "O" (both capitalized)
// Return the number of times "X" appears in the 2D array

var arraySearch2D = function(arr) {
  // initalize count variable
  var count = 0;

  // linear search
  for (var i = 0; i < arr.length; i++) {
    for (var k = 0; k < arr[i].length; k++) {
      // if 
      if (arr[i][k] === "X") {
        count++;
      }
    }
  }

  return count;
};
