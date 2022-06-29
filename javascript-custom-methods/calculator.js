/* exported calculator */
let calculator = {
  add: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  divide: (x, y) => x / y,
  square: x => x ** 2,
  sumAll: numbers => {
    let sum = 0;
    numbers.forEach(index => sum += index);
    return sum;
  },
  getAverage: numbers => {
    let sum = 0;
    numbers.forEach(index => sum += index);
    return sum / numbers.length;
  }
};
