const one = 1;
const twenty = 20;
const hundred = 100;

const maximumValue = Math.max(one, hundred, twenty);
console.log(`maximumValue: ${maximumValue}`);


const heroes = ['Spiderman', 'Batman', 'Superman', 'Antman'];
const randomNumber = Math.random() * heroes.length;
const randomIndex = Math.floor(randomNumber)
console.log(randomNumber, randomIndex);
const randomHero = heroes[randomIndex];
console.log(`randomHero: ${randomHero}`);


const library = [{
    title: 'Bible',
    author: 'God'
  },
  {
    title: 'Hunger Games',
    author: 'Katniss'
  },
  {
    title: 'Harry',
    author: 'Potter'
  }];

  console.log(library)

  const firstBook = library.shift();
  console.log(firstBook);


var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
}

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);


let fullName = 'John Baik';
const firstAndLastName = fullName.split(' ');
console.log(firstAndLastName);
let firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(`sayMyName: ${sayMyName}`);
