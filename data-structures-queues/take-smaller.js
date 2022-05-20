/* exported takeSmaller */

function takeSmaller(queue) {
  let newArray= [];
  let first = queue.dequeue();
  if (first === undefined) {
    return;
  }
  let second = queue.dequeue();
  if (second === undefined) {
    return first;
  }
  newArray.push(first, second);
  let smallest = newArray.sort(function(a, b) {
    return a - b;
  });
  queue.enqueue(newArray[1]);
  return newArray[0];
}

//
