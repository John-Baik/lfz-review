/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (queue.peek() === undefined) {
    return;
  }
  while (index > 0) {
    let front = queue.dequeue();
    queue.enqueue(front);
    index--;
  }
  return queue.dequeue();
}
