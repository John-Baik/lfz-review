/* exported omit */
function omit(source, keys) {
  let newObject = {};
  let deepCopy = Object.assign({}, source);
  for (let i = 0; i < keys.length; i++) {
    let index = keys[i];
    if (source[index] !== undefined) {
      delete deepCopy[index];
    }
  }
  return deepCopy;
}
