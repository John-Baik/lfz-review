/* exported updateNext */

function updateNext(list, value) {
  if (list.next === null) {
    return;
  } else {
    list.next.data = value;
  }
}
