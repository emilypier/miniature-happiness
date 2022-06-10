// Write code to create a function that accepts a number and returns true if the number is a perfect square, otherwise it returns false.
// You may not use the built-in Math.sqrt method


// from https://www.atechdaily.com/posts/algorithm-to-check-whether-a-number-is-a-perfect-square :
// check whether the number is greater than or equal to 0 , bc a perfect square can never be a negative integer.
// If number is positive, start loop from zero to that number.
// For each value of the loop variable, check whether the square of that number and the given number are equal or not. 
// If they are equal, the given number is a perfect square.

var isPerfectSquare = function(num) {
  // initialize loop variable
  var i = 0;

  while (true) {
    var currentSquare = i * i;

    // if i*i equal the num given, return true bc it's a perfect square
    if (currentSquare === num) {
      return true;
    // if i*i is greater than num given, return false bc it's not a perfect square
    } else if (currentSquare > num) {
      return false;
    // if i*i < num, add 1
    } else {
      i++;
    }
  }
  
};
