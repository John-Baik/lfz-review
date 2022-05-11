/* exported numVowels */
function numVowels(string) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  let i = 0;
  let vowelCount = 0;
  while (i < string.length) {
    let currentLetter = string[i].toLowerCase();
    if (vowels[currentLetter]) {
      vowelCount++
    }
    i++;
  }
  return vowelCount;
}
