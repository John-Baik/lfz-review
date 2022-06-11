/* exported unique */
function unique(array) {
  let obj = {};
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Object.values(obj).includes(array[i])) {
      obj[i] = array[i];
    }
  }
  for (let property in obj) {
    newArray.push(obj[property]);
  }
  return newArray
}
