// Write code to return the largest number in the given array

var maxNum = function(arr) {
// sort numbers in array in descending order
  arr.sort(
    function(a, b){
      return b - a;
    }
  );
    return (arr[0]);
};

// // OR
// var maxNum = function (arr) {
//   console.log(arr);
//   var max = arr[0];

//   for (var i = 1; i < arr.length; i++) {
//     var currentNum = arr[i];

//     if (currentNum > max) {
//       max = currentNum;
//     }
//   }

//   return max;
// };