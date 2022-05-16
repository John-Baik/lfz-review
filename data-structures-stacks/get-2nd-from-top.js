/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return;
  }
  let first = stack.pop();
  let second = stack.peek();
  stack.push(first);
  return second;
}
