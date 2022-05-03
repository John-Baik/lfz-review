/* exported isVowel */
function isVowel(character) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  if (vowels[character.toLowerCase()]) {
    return true;
  } else {
    return false;
  }
}
