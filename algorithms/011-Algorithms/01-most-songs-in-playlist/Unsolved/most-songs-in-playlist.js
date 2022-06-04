// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  let SongsInPlaylist = arr.length;
    let sum = arr.reduce(
      (previousValue, currentValue) => previousValue + currentValue, 0
    );
    return sum;
  };

  sum(arr);
  // see if numbers in array add up to 60
    // if greater than 60, minus song/s to make it less than 60
      // return number of songs in array.
    // if all numbers added is less than 60, return amount of items in array.
      // return number of songs in array



