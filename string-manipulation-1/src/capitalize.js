/* exported capitalize */
function capitalize(word) {
  let lowerCase = word.toLowerCase();
  let array = lowerCase.split('');
  let upperCaseLetter = lowerCase[0].toUpperCase();
  array[0] = upperCaseLetter;
  const capitalized = array.join('');
  return capitalized;
}
