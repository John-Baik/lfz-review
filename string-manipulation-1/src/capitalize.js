/* exported capitalize */
function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const rest = word.substring(1).toLowerCase();
  return firstLetter + rest;
}

// const array = word.split();
// const map = array.map(index => index.toLowerCase()); // [link]
// const upperCase = map[0][0].toUpperCase(); //[L]
// const stringWord = map.join('');
// const missingFirst = stringWord.substring(1);
// const final = `${upperCase}${missingFirst}`;
// return final;
