let button = document.querySelector('button');
let background = document.querySelector('div');

button.addEventListener('click', event => {
  let currentClass = event.target.getAttribute('id');
  if (currentClass === 'button-dark') {
    button.setAttribute('id', 'button-light');
    background.setAttribute('id', 'background-light');
  } else {
    button.setAttribute('id', 'button-dark');
        background.setAttribute('id', 'background-dark');
  }
});
