/* exported capitalize */
function capitalize(word) {
  let lowerCase = word.toLowerCase();
  let array = lowerCase.split('');
  let upperCaseLetter = lowerCase[0].toUpperCase();
  array[0] = upperCaseLetter;
  const capitalized = array.join('');
  return capitalized;
}




  // const array = word.split();
  // const map = array.map(index => index.toLowerCase()); // [link]
  // const upperCase = map[0][0].toUpperCase(); //[L]
  // const stringWord = map.join('');
  // const missingFirst = stringWord.substring(1);
  // const final = `${upperCase}${missingFirst}`;
  // return final;
