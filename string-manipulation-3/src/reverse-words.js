/* exported reverseWords */
function reverseWords(string) {
  const array = string.split(' ');
  for (let i = 0; i < array.length; i++) {
    const reverse = array[i].split('').reverse().join('');
    array[i] = reverse;
  }
  let finalString = array.join(' ');
  return finalString;

}


  // let final = '';
  // let word = '';
  // for (let i = 0; i < string.length; i++) {
  //   let index = string[i];
  //   if (index !== ' ') {
  //     word = index + word;
  //   } else {
  //     final += word + index;
  //     word = '';
  //   }
  // }
  // final += word;
  // return final;
