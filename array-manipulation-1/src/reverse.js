/* exported reverse */
function reverse(array) {
  const reverseArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseArray.push(array[i]);
  }
  console.log(reverseArray);
  return reverseArray;
}
