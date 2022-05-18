//from codewars

function abbrevName(name){
  //split name at space
  var nameArray = name.split(" ");
  
  //return first letter of array0, period, and first letter of array1. convert to uppercase.
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();

}
