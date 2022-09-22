// function that takes a string as a parameter and returns
// the string with the uppercase first letter:

function capitalize(str) {
  const firstLetter = str[0].toUpperCase();
  const restOfSentence = str.slice([1]);
  return firstLetter + restOfSentence;
}

console.log(capitalize('capitalize - hellllo'));

// function that makes all characters uppercase
function allCaps(str) {
  return str.toUpperCase();
}

console.log(allCaps('allCaps - what is this foo bar'));

// function that capitalizes the first letter of each word in a string
function capitalizeWords(str) {
  const words = str.split(' ');
  const upperWords = words.map((word) => capitalize(word));
  return upperWords.join(' ');
}

console.log(capitalizeWords('capitalizeWords - my dog moose is just the best'));

// function that capitalized Headlines
// function capitalizeHeadline() {
// }
// console.log(capitalizeHeadline('What is this whichery?'));

// function that removes extra spaces
function removeExtraSpaces(str) {
  // const strTrimmed = str.trim();
  const chars = str.split(' ');
  function removeSpaces(char) {
    return (char !== '');
  }
  const filtered = chars.filter(removeSpaces);
  return filtered.join(' ');
}

console.log(removeExtraSpaces('removeExtraSpaces -       my    doggo moose IS THE BOMB    jigidy     '));


// String.prototype.capitalize = function() {
//   console.log('Whats this:', this)
//   return capitalize(this)
// }

// function that converts the string to lowercase and replaces the spaces with user specific symbol
function makeCase(str, replace) {
  const strLower = str.toLowerCase();
  const strTrimmed = strLower.trim();
  const kebabed = strTrimmed.replace(/\s+/g, replace);
  return kebabed;
}
console.log(makeCase('      makeCase Work ', '_'));

function kebobCase(str) {
  return makeCase(str, '-');
}

console.log(kebobCase('      kebobCase This is a test and who knows if itll Work'));

// const filtered = strTrimmed.replace(/\s+/g, '-')

// snakeCase()
function snakeCase(str) {
  return makeCase(str, '_');
}

console.log(snakeCase('      snakeCase This is a test and who knows if itll Work'));


// camelCase()
function camelCase(str) {
  const firstLetter = str[0].toLowerCase();
  const restOfSentence = str.slice([1]);
  const words = restOfSentence.split(' ');
  const firstWord = firstLetter + words[0];
  const theSentence = words.slice([1]);
  const upperWords = theSentence.map((word) => capitalize(word));
  return firstWord + upperWords.join('');
}

console.log(camelCase("this moose renee alexandre"));

// shift()
// makeHashTag(str)
// isEmpty(str)
// add readme.md
