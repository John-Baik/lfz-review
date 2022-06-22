/* exported zip */
function zip(first, second) {
  const newArray = [];
  while (first.length !== second.length) {
    if (first.length > second.length) {
      first.pop();
    } else {
      second.pop()
    }
  }
  for (let i = 0; i < first.length; i++) {
    const miniArray = [];
    miniArray.push(first[i], second[i]);
    newArray.push(miniArray);
  }
  return newArray;
}
