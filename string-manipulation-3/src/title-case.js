/* exported titleCase */
function titleCase(string) {
  const splitArray = string.split(' ');
  for (let i = 0; i < splitArray.length; i++) {
    const lowerCase = splitArray[i].toLowerCase().substring(1);
    const firstLetter = splitArray[i][0].toUpperCase();
    const finalString = firstLetter + lowerCase;
    if (finalString === 'Javascript') {
      splitArray[i] = 'JavaScript';
    } else if (finalString === 'Api') {
      splitArray[i] = 'API';
    } else {
      splitArray[i] = finalString;
    }
  }
  console.log(splitArray.join(' '));
  return splitArray.join(' ');
}
