/* exported getWords */
function getWords(string) {
  if (!string) {
    return [];
  } else {
    const array = string.split(' ');
    return array;
  }
}
