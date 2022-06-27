/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */


function isUnderFive(number) {
  return number < 5;
}

function isEven(number) {
  return number % 2 === 0;
}

let startsWithJ = string => string[0] === 'J';

const isOldEnoughToDrink = person => person.age >= 21;

const isOldEnoughToDrive = person => person.age >= 16;



const categorizeAcidity = ph => {
  if (ph === 7) {
    return 'neutral';
  } else if (ph >= 0 && ph <= 7) {
    return 'acid';
  } else if (ph <= 14 && ph >= 7) {
    return 'base';
  }
  return 'invalid pH level';
}
