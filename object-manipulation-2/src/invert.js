/* exported invert */
function invert(source) {
  let newObject = {};
  for (key in source) {
    newObject[source[key]] = key;
  }
  return newObject;
}
