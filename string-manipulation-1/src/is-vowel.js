/* exported isVowel */
function isVowel(character) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true
  };
  if (vowels[character.toLowerCase()]) {
    return true;
  } else {
    return false;
  }
}

// const newCharacter = character.toLowerCase();
// switch (newCharacter) {
//     return true;
//     break;
//   case 'a':
//   case 'e':
//     return true;
//     break;
//   case 'i':
//     return true;
//     break;
//   case 'o':
//     return true;
//     break;
//   case 'u':
//     return true;
//     break;
//   default:
//     return false;
// }
