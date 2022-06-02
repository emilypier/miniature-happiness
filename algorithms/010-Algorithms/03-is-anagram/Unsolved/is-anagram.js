// TODO: Write code to create a function that accepts two strings
// Return true if the strings are anagrams of each other, otherwise return false

var isAnagram = function(strA, strB) {
  // if strings aren't the same amount of letters, return false.
  if (strA.length != strB.length) {
    return false;
  };

  //creating object for letters in each string
  var aLetterMap = {};
  var bLetterMap = {};
  var strLength = strA.length;

  // loop through letters in string, as long as letters less than string length?
  for (var i = 0; i < strLength; i++) {
    //    
    var aLetter = strA[i];
    var bLetter = strB[i];

    aLetterMap[aLetter] = (aLetterMap[aLetter] || 0) + 1;
    bLetterMap[bLetter] = (bLetterMap[bLetter] || 0) + 1;
  };

  for (var key in aLetterMap) {
    if (aLetterMap[key] !== bLetterMap[key]) {
      return false;
    }
  }

  return true;
};

// another solution: https://javascript.plainenglish.io/algorithm-time-anagrams-4f76f68a937f 