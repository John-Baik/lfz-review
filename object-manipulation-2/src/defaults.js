/* exported defaults */
function defaults(target, source) {
  for (key in source) {
    let index = source[key];
    if (target[key] === undefined) {
      target[key] = index;
    }
  }
  return target;
}
