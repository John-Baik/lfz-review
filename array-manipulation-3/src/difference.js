/* exported difference */
function difference(first, second) {
  let repeat = {};
  let newArray = [];
  for (let i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      continue;
    }
    newArray.push(first[i])
  }
  for (let i = 0; i < second.length; i++) {
    if (first.includes(second[i])) {
      continue;
    }
    newArray.push(second[i])
  }
  return newArray;
}
