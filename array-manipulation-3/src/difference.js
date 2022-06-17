/* exported difference */
function difference(first, second) {
  let join = first.join(' ') + ' ' + second.join(' ');
  let splitArray = join.split(' ');
  let obj = {};
  let blocked = {};
  let i = 0;

  splitArray.forEach(index => {
    if (Object.values(obj).includes(index)) {
      blocked[index] = true;

      delete obj[];  // delete using index, not value in the brackets
    } else {
      if (!blocked[index]) {
        obj[i] = index;
      }
    }
    i++;
  });
  console.log(''as)

}
