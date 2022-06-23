/* exported union */
function union(first, second) {
  let repeat = {};
  let newArray = [];
  for (let word of first) {
    repeat[word] = true;
  }
  for (let word of second) {
    repeat[word] = true;
  }
  for (let word of first) {
    if (repeat[word]) {
      newArray.push(word);
      delete repeat[word];
    }
  }
  for (let word of second) {
    if (repeat[word]) {
      newArray.push(word);
      delete repeat[word];
    }
  }
  return newArray;
}
