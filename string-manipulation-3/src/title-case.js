/* exported titleCase */
function titleCase(string) {
  const splitArray = string.split(':  ');
  for (let i = 0; i < splitArray.length; i++) {
    let right;
    if (splitArray[i - 1]) {
       right = splitArray[i - 1].length - 1;
    }

    const lowerCase = splitArray[i].toLowerCase().substring(1);
    const firstLetter = splitArray[i][0].toUpperCase();
    const finalString = firstLetter + lowerCase;
    if (finalString === 'Javascript') {
      splitArray[i] = 'JavaScript';
    } else if (finalString === 'Javascript:') {
      splitArray[i] = 'JavaScript:';
    } else if (finalString === 'Api') {
      splitArray[i] = 'API';
    } else if (i === 0 || splitArray[i - 1][right] === ':' || splitArray[i].length >= 4) {
      splitArray[i] = finalString;
    }
  }
  console.log(splitArray.join(':'));
  return splitArray.join(' ');
}
