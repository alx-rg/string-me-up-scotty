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

function capitalizeHeadline(str) {
  const lowerCased = str.toLowerCase();
  const word = lowerCased.split(' ');
  const makeSmall = ['and', 'an,', 'a', 'at', 'but', 'by', 'for', 'in', 'the', 'is'];
  word[0] = capitalize(word[0]);
  for (let i = 1; i < word.length; i += 1) {
    if (!makeSmall.includes(word[i])) {
      word[i] = capitalize(word[i]);
    }
  }
  return word.join(' ');
}
console.log(capitalizeHeadline('is What Is this is is THE IN whichery?'));

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
console.log(kebobCase('      kebobCase!!! This-is-test and who knows if itll WORk'));

// const filtered = strTrimmed.replace(/\s+/g, '-')

function snakeCase(str) {
  return makeCase(str, '_');
}

console.log(snakeCase('      snakeCase_this and - remove the other 23@@#characters!'));

// camelCase()

function camelCase(str) {
  const lowercase = str.toLowerCase()
  const words = lowercase.split(' ');
  const camelWords = words.map((word, i) => {
    if (i === 0) {
      return word.toLowerCase();
    }
    return capitalize(word);
  });
  return camelWords.join('');
}

console.log(camelCase('This is moose BOBBY alex MAXIMUSIMUS'));
// shift()

function shift(str, position = 1) {
  const startSentence = str.slice(position);
  const endSentence = str.slice(0, position);
  return startSentence + endSentence;
}

console.log(shift('what is going on here?', 2));

// makeHashTag(str)

function makeHashTag(str) {
  const hashtags = [];
  const words = str.split(' ');
  const asc = words.sort((a, b) => b.length - a.length);
  asc.map((word, i) => {
    if (i < 3) {
      hashtags.push(`#${capitalize(word)}`);
    }
    return '';
  });
  return hashtags;
}


console.log(makeHashTag('this is a bambooozeled mooose MAXIMILIUS'));

// isEmpty(str)

function isEmpty(str) {
  const whitespace = str.replace(/\s/g, '');
  return whitespace === '';
}

console.log(isEmpty('    \n\r\t     ')); // true
console.log(isEmpty('abc def')); // false
// add readme.md

module.exports = {
  capitalize,
  allCaps,
  capitalizeWords,
  isEmpty,
  capitalizeHeadline,
  removeExtraSpaces,
  kebobCase,
  snakeCase,
  camelCase,
  shift,
  makeHashTag,
};

// # This package helps you CaPItaLiZE your words

// ### Creating an npm package and publishing said package

// Publishing an update, as you have to update the version number!

// Why? Getting a deeper understanding of npm and it's ecosystem + contributing to open source.

// ### Let's talk about SEMVer

// The first digit is the MAJOR version. 
// I update the '1' 1.0.0 if the updates are making the code incompatible with the previous version.

// The second digit changes if the code is BACKWARDS compatible.

// The third number is called a patch when you make bug fixes and improvements.

// SEMVer = Semantic Versioning

// If I want to publish:
// npm publish (but make sure to update the version number appropriately)