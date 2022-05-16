/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  let first = stack.pop();
  stack.push(value);
  stack.push(first);
}
