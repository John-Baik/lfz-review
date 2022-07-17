const add = require('./add');
const divide = require('./divide');
const multiply = require('./multiply');
const subtract = require('./subtract');

let result = 0;

function calculate() {
  const x = Number(process.argv[2]);
  const math = process.argv[3].toLowerCase();
  const y = Number(process.argv[4]);
  if (math === 'plus') {
    result = add(x, y);
  } else if (math === 'minus') {
    result = subtract(x, y);
  } else if (math === 'times') {
    multiply(x, y);
    return;
  } else if (math === 'divided') {
    divide(x, y);
    return;
  }
  console.log(result)
}

calculate();
