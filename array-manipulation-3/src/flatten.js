/* exported flatten */
function flatten(array) {
  let newArray = [];
  array.forEach(i => {
    typeof i === 'object'
    ? newArray.push(...i)
    : newArray.push(i);
  });
  return newArray;
}
