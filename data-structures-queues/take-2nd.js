/* exported take2nd */

function take2nd(queue) {
  let front = queue.dequeue();
  if (front === undefined) {
    return;
  }
  let second = queue.dequeue();
  if (second === undefined) {
    return front
  }
  queue.enqueue(front);
  return second;
}
