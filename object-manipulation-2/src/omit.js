/* exported omit */
function omit(source, keys) {
  let newObject = Object.assign({}, source);
  for (let i = 0; i < keys.length; i++) {
    let index = keys[i];
    if (newObject[index] !== undefined) {
      delete newObject[index];
    }
  }
  return newObject;
}
