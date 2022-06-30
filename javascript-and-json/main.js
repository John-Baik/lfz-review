const array = [
  {
    isbn: 'Yea',
    title: 'Bible',
    author: 'God'
  },
  {
    isbn: 'okay',
    title: 'Hunger Games',
    author: 'Katniss'

  },
  {
    isbn: 'usher',
    title: 'KH',
    author: 'Sora'

  }
];

const stringify = JSON.stringify(array);
console.log(stringify)

const string = '{"student":"John","numberId":"2"}';

const parse = JSON.parse(string);
console.log(parse);
