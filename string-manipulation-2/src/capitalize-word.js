/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return "JavaScript";
  } else {
    const lowerCase = word.toLowerCase().substring(1);
    const firstLetter = word[0].toUpperCase();
    return firstLetter + lowerCase;
  }
}
