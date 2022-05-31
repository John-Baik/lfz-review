/* exported removeNext */

function removeNext(list) {
  if (list.next === null) {
    return;
  } else {
    const third = list.next.next;
    list.next = third;
  }
}
