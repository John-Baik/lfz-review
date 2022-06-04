/* exported titleCase */
function titleCase(string) {
  const splitArray = string.split(' ');
  const minorWord = {
    a: true,
    and: true,
    as: true,
    and: true,
    at: true,
    by: true,
    but: true,
    for: true,
    in: true,
    nor: true,
    of: true,
    on: true,
    or: true,
    per: true,
    to: true,
    the: true
  };

  for (let i = 0; i < splitArray.length; i++) {
    let colon;
    let right;
    if (splitArray[i - 1]) {
       right = splitArray[i - 1].length - 1;
    }
    if (splitArray[i].includes(':')) {
      splitArray[i] = splitArray[i].substring(0, splitArray[i].length - 1);
      colon = true;
    }
    const lowerCase = splitArray[i].toLowerCase().substring(1);
    const firstLetter = splitArray[i][0].toUpperCase();
    const finalString = firstLetter + lowerCase;
    if (finalString === 'Javascript') {
      splitArray[i] = 'JavaScript';
    } else if (finalString === 'Api') {
      splitArray[i] = 'API';
    } else if (splitArray[i].includes('-')) {
      const dashSplit = splitArray[i].split('-');
      const firstIndex = dashSplit[0].substring(1).toLowerCase();
      const secondIndex = dashSplit[1].substring(1).toLowerCase();
      const uppercaseFirst = dashSplit[0][0].toUpperCase();
      const uppercaseSecond = dashSplit[1][0].toUpperCase();
      dashSplit[0] = uppercaseFirst + firstIndex;
      dashSplit[1] = uppercaseSecond + secondIndex;
      const joinedString = dashSplit.join('-');
      splitArray[i] = joinedString;
    } else if (i === 0 || splitArray[i - 1][right] === ':' || !minorWord[splitArray[i]]) {
      splitArray[i] = finalString;
    }
    if (colon) {
      splitArray[i] = splitArray[i] + ':';
    }
  }
  console.log(splitArray.join(' '))
  return splitArray.join(' ');
}
