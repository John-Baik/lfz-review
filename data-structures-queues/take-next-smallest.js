/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  let first = queue.dequeue();
  let second = queue.peek();
  if (second === undefined) {
    return first;
  }
  while (first > queue.peek()) {
    queue.enqueue(first);
    first = queue.dequeue();
  }
  return first;
}
