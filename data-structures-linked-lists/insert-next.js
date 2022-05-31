/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const third = list.next;
  list.next = new LinkedList(value);
  list.next.next = third;
}
