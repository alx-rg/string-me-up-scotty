// function that takes a string as a parameter and returns
// the string with the uppercase first letter:

function capitalize(str: string): string {
  const firstLetter = str[0].toUpperCase();
  const restOfSentence = str.slice([1]);
  return firstLetter + restOfSentence;
}

// function that makes all characters uppercase
function allCaps(str: string): string {
  return str.toUpperCase();
}

// function that capitalizes the first letter of each word in a string
function capitalizeWords(str: string): string {
  const words = str.split(' ');
  const upperWords = words.map((word) => capitalize(word));
  return upperWords.join(' ');
}

function capitalizeHeadline(str: string): string {
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

// function that removes extra spaces
function removeExtraSpaces(str: string): string {
  // const strTrimmed = str.trim();
  const chars = str.split(' ');
  function removeSpaces(char) {
    return (char !== '');
  }
  const filtered = chars.filter(removeSpaces);
  return filtered.join(' ');
}

// function that converts the string to lowercase and replaces the spaces with user specific symbol
function makeCase(str: string, separator = '-'): string {
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
}

//kebobCase
function kebobCase(str: string): string {
  return makeCase(str, '-');
}

// snakeCase
function snakeCase(str: string): string {
  return makeCase(str, '_');
}

// camelCase()
function camelCase(str: string): string {
  const strTrim = str.trim()
  const lowercase = strTrim.toLowerCase()
  const words = lowercase.split(' ');
  const camelWords = words.map((word, i) => {
    if (i === 0) {
      return word.toLowerCase();
    }
    return capitalize(word);
  });
  return camelWords.join('');
}

// shift()
function shift(str: string, position = 1): string {
  const startSentence = str.slice(position);
  const endSentence = str.slice(0, position);
  return startSentence + endSentence;
}

// makeHashTag(str)
function makeHashTag(str: string): string[] {
  const hashtags = [];
  const lowerCased = str.toLowerCase()
  const words = lowerCased.split(' ');
  const asc = words.sort((a, b) => b.length - a.length);
  asc.map((word, i) => {
    if (i < 3) {
      hashtags.push(`#${capitalize(word)}`);
    }
    return '';
  });
  return hashtags;
}

// isEmpty(str)
function isEmpty(str: string): boolean {
  const whitespace = str.replace(/\s/g, '');
  return whitespace === '';
}

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
