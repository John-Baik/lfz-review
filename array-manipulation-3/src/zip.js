/* exported zip */
function zip(first, second) {
  let i = 0;
  const finalArray = [];
  while (i < first.length && i < second.length) {
    finalArray.push([first[i], second[i]]);
    i++;
  }
  return finalArray;
}
