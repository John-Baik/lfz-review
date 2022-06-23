/* exported flatten */
function flatten(array) {
  const newArray = [];
  array.forEach(i => {
  typeof i === 'object'
  ? newArray.push(...i)
  : newArray.push(i);
  });
  return newArray;
}
