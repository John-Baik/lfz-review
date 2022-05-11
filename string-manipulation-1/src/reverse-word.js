/* exported reverseWord */
function reverseWord(word) {
  let reverseString = ''
  for (let i = word.length - 1; i >= 0; i--) {
    reverseString += word[i];
  }
  return reverseString;
}
