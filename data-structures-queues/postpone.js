/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return;
  }
  let front = queue.dequeue();
  queue.enqueue(front);
}
