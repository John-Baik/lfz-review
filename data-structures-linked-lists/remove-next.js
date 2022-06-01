/* exported removeNext */

function removeNext(list) {
  if (!list.next) {
    return;
  }
  const third = list.next.next;
  list.next = third;
}
