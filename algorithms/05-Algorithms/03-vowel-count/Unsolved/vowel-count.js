// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
  let result = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  //loop through letters in array
  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) {
      result += 1;
    }
  }

  return result;
};


// FROM   https://www.freecodecamp.org/news/javascript-split-how-to-split-a-string-into-an-array-in-js/  
// let str = "Yes, You Can Do It!";

// console.log(str[0]); // Y
// console.log(str[1]); // e
// console.log(str[2]); // s
// console.log(str[3]); // ,

// console.log(str[10]); // a