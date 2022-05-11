/* exported ransomCase */
function ransomCase(string) {
  let newString = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      let letterLower = string[i].toLowerCase();
      newString += letterLower;
    } else {
      let letterUpper = string[i].toUpperCase();
      newString += letterUpper;
    }
  }
  return newString;
}
