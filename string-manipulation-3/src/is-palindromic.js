/* exported isPalindromic */
function isPalindromic(string) {
  const newString = string.replace( /\s/g, '');
  for (let i = 0; i < newString.length; i++) {
    let j = newString.length - 1 - i;
    if (newString[i] !== newString[j]) {
      return false;
    }
  }
  return true;
}
