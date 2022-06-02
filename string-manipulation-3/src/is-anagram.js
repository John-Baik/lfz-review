/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const newFirst = firstString.replace( /\s/g, '');
  const newSecond = secondString.replace( /\s/g, '');
  const firstSorted = newFirst.split('').sort().join('');
  const secondSorted = newSecond.split('').sort().join('');
  return firstSorted === secondSorted;
}
