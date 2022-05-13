/* exported chunk */
function chunk(array, size) {
  let newArray = [];
  let i = 0;
  while (i < array.length) {
    newArray.push(array.slice(i, i + size));
    i += size;
  }
  return newArray;
}




//
// let newArray = [];
// let miniArray = [];
// let count = 1;
// for (let i = 0; i < array.length; i++) {
//   if (count === size) {
//     miniArray.push(array[i]);
//     newArray.push(miniArray);
//     miniArray = [];
//     count = 1;
//   } else if (i === array.length - 1) {
//     miniArray.push(array[i]);
//     newArray.push(miniArray);
//   } else {
//     miniArray.push(array[i]);
//     count++;
//   }
// }
// return newArray;
