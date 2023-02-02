import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

const map = pokedex.map(index => (
  <li key={index.number}>{index.name}</li>
));

const ul = <ul>{map}</ul>;

ReactDOM.render(ul, document.getElementById('root'));
