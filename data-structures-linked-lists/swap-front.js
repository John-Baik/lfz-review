/* exported swapFront */

function swapFront(list) {
  if (list.next === null) {
    return list;
  } else {
    const first = list;
    const second = list.next;
    const third = list.next.next;
    list = second;
    list.next = first;
    list.next.next = third;
    return list;
  }
}
