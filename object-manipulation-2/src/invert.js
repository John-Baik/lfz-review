/* exported invert */
function invert(source) {
  let newObject = {};
  for (key in source) {
    let index = source[key];
    newObject[index] = key;
  }
  return newObject;
}
