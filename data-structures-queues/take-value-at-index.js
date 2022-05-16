/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  while (index > 0) {
    const first = queue.dequeue();
    queue.enqueue(first);
    index--;
  }
  return queue.dequeue();
}
