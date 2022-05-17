/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  let first = stack.pop();
  if (first === undefined) {
    return;
  }
  stack.push(value);
  stack.push(first);

}
