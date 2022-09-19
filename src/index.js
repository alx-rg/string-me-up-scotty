// function that takes a string as a parameter and returns
// the string with the uppercase first letter:

function capitalize(str) {
  const firstLetter = str[0].toUpperCase();
  const restOfSentence = str.slice([1]);
  const capitalizedSentence = (firstLetter + restOfSentence);
  return (capitalizedSentence);
}

console.log(capitalize('hellllo'));

// function that makes all characters uppercase
function allCaps(str) {
  return str.toUpperCase();
}

console.log(allCaps('what is this foo bar'));

// function that capitalizes the first letter of each word in a string

function capitalizeWords(str) {
  const splitOnSpaces = str.split(' ');
  let newUpper = '';
  for (i in splitOnSpaces) {
    newUpper += `${capitalize(splitOnSpaces[i])} `
  }
  return newUpper;
}

console.log(capitalizeWords('my dog moose is just the best'));

// function capitalize (str)
  
// const str = "foo bar";

// console.log(str);

// String.prototype.capitalize = function() {
//   console.log('Whats this:', this)
//   return capitalize(this)
// }