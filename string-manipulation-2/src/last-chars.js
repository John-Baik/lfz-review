/* exported lastChars */
function lastChars(length, string) {
  const index = string.length - length;
  return string.substring(index);
}


// let newString = '';
// let i = 0;
// if (string.length < length) {
//   return string;
// }
// else {
//   while (i < length) {
//     let index = string.length - 1 - i;
//     newString += string[index];
//     i++;
//   }
// }
// return newString.split('').reverse().join('');
