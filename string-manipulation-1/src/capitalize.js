/* exported capitalize */
function capitalize(word) {
  if (word.length < 1) {
    return word.toUpperCase();
  } else {
    const lowerCaseWord = word.toLowerCase().substring(1);
    const upperCaseFirstLetter = word[0].toUpperCase();
    const final = upperCaseFirstLetter + lowerCaseWord;
    console.log(final);
    return final;
  }
}




  // const array = word.split();
  // const map = array.map(index => index.toLowerCase()); // [link]
  // const upperCase = map[0][0].toUpperCase(); //[L]
  // const stringWord = map.join('');
  // const missingFirst = stringWord.substring(1);
  // const final = `${upperCase}${missingFirst}`;
  // return final;
