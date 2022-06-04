// Write code to create a function that accepts an array of numbers
// Each number represents the duration of a song in minutes
// Return the maximum number of songs from the list that can fit in a 60 minute playlist

var mostSongsInPlaylist = function(arr) {
  // sort songs in order of shortest to longest
  var sortedArr = arr.sort();
  var totalMins = 0;
  var totalSongs = 0;

  console.log("arr.sort: " + arr.sort);

  // loop through songs in array
  for (var i = 0; i < sortedArr.length; i++) {
    var currentSongDuration = sortedArr[i];
    console.log("current song duration: " + currentSongDuration + " and sortedArr: " + sortedArr)

    // if totalMins and currentSongDuration less than 60, 
    // totalMins equal totalMins + currentSongDuration
    // increment totalSongs?
    if (totalMins + currentSongDuration <= 60) {
      totalMins += currentSongDuration;
      totalSongs++;
      console.log("total songs: " + totalSongs);
    } else {
      return totalSongs;
    }
  }

  return totalSongs;
};