/* exported tail */
function tail(array) {
  let tailArray = [];
  for(let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
