/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let splitArray = string.split('');
  splitArray.splice(firstIndex, 1, string[secondIndex]);
  splitArray.splice(secondIndex, 1, string[firstIndex]);
  return splitArray.join('');
}
