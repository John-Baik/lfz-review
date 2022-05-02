/* exported isVowel */
function isVowel(char) {
  let vowel = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  if (vowel[char.toLowerCase()]) {
    return true;
  } else {
    return false;
  }
}
