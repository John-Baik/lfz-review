/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  let first = stack.pop();
  if (first === undefined) {
    return;
  }
  let second = stack.peek();
  if (second === undefined) {
    stack.push(first);
    return;
  }
  stack.push(first);
  return second;
}
