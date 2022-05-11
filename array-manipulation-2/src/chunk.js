/* exported chunk */
function chunk(array, size) {
const newArray = [];
let miniArray = [];
let count = 1;
for (let i = 0; i < array.length; i++) {
  if (count === size) {
    miniArray.push(array[i]);
    newArray.push(miniArray);
    miniArray = [];
    count = 1;
  } else if (i === array.length - 1) {
    miniArray.push(array[i]);
    newArray.push(miniArray);
  } else {
    miniArray.push(array[i]);
    count++;
  }
}
return newArray;




//   let newArray = [];
//   let i = 0;
//   while (i < array.length) {
//     let miniArray = [];
//     miniArray.push(array.slice(i, i + size));
//     newArray.push(miniArray);
//     i += size;
//     console.log('newArray: ', newArray)
//   }
//   return newArray;
// }
