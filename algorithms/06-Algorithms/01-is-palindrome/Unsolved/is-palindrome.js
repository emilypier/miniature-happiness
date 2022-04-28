// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
  // get reveresed string
  var reversedString = str
    .split('') // splits each letter
    .reverse('') // reverses order of letters
    .join(''); // joins all letters with nothing between them

  if (reversedString === str) {
    return true;
  } else {
    return false;
  }  
};
