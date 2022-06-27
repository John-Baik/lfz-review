function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
};

const clickBtn = document.querySelector('.click-button');

clickBtn.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const hover = document.querySelector('.hover-button');

hover.addEventListener('mouseover', handleMouseOver);

const double = document.querySelector('.double-click-button').addEventListener('dblclick', event => {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
});
