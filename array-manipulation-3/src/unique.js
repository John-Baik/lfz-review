/* exported unique */
function unique(array) {
  let repeat = {};
  let finalArray = [];
  for (let word of array) {
    if (repeat[word]) {
      continue;
    }
    repeat[word] = true;
    finalArray.push(word);
  }
  return finalArray;
}
