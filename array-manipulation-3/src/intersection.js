/* exported intersection */
function intersection(first, second) {
  let repeat = {};
  let newArray = [];
  first.forEach(word => repeat[word] = true);
  second.forEach(word => {
    if (repeat[word]) {
      delete repeat[word]
    }
  });
  first.forEach(word => {
    if (!repeat[word]) {
      newArray.push(word);
    }
  });
  return newArray;
}
