/* exported pick */
function pick(source, keys) {
  let newObject = {};
  for (let i = 0; i < keys.length; i++) {
    let index = keys[i];
    if (source[index] !== undefined) {
      newObject[index] = source[index];
    }
  }
  return newObject;
}
