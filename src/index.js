// function that takes a string as a parameter and returns
// the string with the uppercase first letter:

function upperFirst(str) {
  const firstLetter = str[0].toUpperCase();
  const restOfSentence = str.slice([1]);
  const capitalizedSentence = (firstLetter + restOfSentence);
  return (capitalizedSentence);
}

console.log(upperFirst('hellllo'));

