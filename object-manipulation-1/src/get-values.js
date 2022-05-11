/* exported getValues */
function getValues(object) {
  const array = [];
  for (const property in object) {
    array.push(object[property]);
  }
  return array;
}
