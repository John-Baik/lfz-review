/* exported capitalizeWords */
function capitalizeWords(string) {
  const splitArray = string.split(' ');
  const mapArray = splitArray.map(word => {
    const lowerCase = word.toLowerCase().substring(1);
    const firstLetter = word[0].toUpperCase();
    const finalString = firstLetter + lowerCase;
    return finalString;
  });
  return mapArray.join(' ');
}
