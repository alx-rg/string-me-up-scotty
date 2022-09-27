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
function makeCase(str, separator = '-') {
  const replacing = separator[0].charCodeAt(0);
  const strLower = str.toLowerCase();
  const strTrimmed = strLower.trim();
  const chars = strTrimmed.split('');
  const filtered = chars.filter((c) => {
    const code = c.charCodeAt(0);
    if (code > 96 && code < 123) {
      return true
    } else if (code > 47 && code < 58) {
      return true
    } else if (code === 32 || code === replacing) {
      return true
    }
    return false
  })
  const noSpace = removeExtraSpaces(filtered.join(''));
  return noSpace.split(' ').join(separator);
  // const kebabed = strTrimmed.replace(/\s+/g, replace);
  // return kebabed;
}
// console.log(makeCase('      makeCase Work ', '_'));

function kebobCase(str) {
  return makeCase(str, '-');
}
console.log(kebobCase('      kebobCase!!! This-is-a_test and who knows if itll Work'));

// const filtered = strTrimmed.replace(/\s+/g, '-')

function snakeCase(str) {
  return makeCase(str, '_');
}

console.log(snakeCase('      snakeCase_this and - remove the other 23@@#characters!'));

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

console.log(camelCase("This moose renee alexandre"));


function camelCase2(str) {
  const words = str.split(' ');
  const camelWords = words.map((word, i) => {
    if (i === 0) {
      return word.toLowerCase();
    }
    return capitalize(word);
  });
  return camelWords.join('');
}

console.log(camelCase2('This is moose RENEE alexandre'))
// shift()

function shift(str) {
  const lastLetter = str[0].toUpperCase();
  const restOfSentence = str.slice([1]);
  return restOfSentence + lastLetter;
}

console.log(shift('what is going on here?'));

// makeHashTag(str)

function makeHashTag(str) {
  const words = str.split(' ');
  const asc = words.sort((a,b) => b.length - a.length);
  console.log(asc);
}

console.log(makeHashTag('this is a test moose alexandre'));

// isEmpty(str)
// add readme.md
