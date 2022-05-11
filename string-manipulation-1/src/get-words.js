/* exported getWords */
function getWords(string) {
  if (!string) {
    return [];
  } else {
  const splitArray = string.split(' ');
  return splitArray;
  }
}
