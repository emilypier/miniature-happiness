// Write code to create a function that returns the factorial of `num`

const factorial = function(num) {
  let result = 1;

  // loop through descending numbers as long as num is greater than 1
  for (var i = num; i > 1; i--) {
    result = result * i;
  };

  return result;
};