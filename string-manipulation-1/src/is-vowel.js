/* exported isVowel */
function isVowel(character) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  const lowerCaseLetter = character.toLowerCase();
  if (vowels[lowerCaseLetter]) {
    return true;
  }
  return false;
}
