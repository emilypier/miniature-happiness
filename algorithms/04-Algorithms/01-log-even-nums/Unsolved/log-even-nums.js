// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
  //loop through numbers
  for (var i = 0; i <= num; i++) {
    // if divisible by 2 with no remainders
    if(i % 2 === 0) {
      console.log(i);
    }
  }
};