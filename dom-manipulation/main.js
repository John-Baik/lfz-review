let clicks = 0;
let clickCounter = document.querySelector('.click-count');
let temperature = document.querySelector('button');
console.log(temperature)

function handleClick(event) {
  clicks++;
  clickCounter.textContent = `Clicks: ${clicks}`;
  if (clicks < 4) {
    temperature.className = 'hot-button cold';
  } else if (clicks < 7) {
     temperature.className = 'hot-button cool';
  } else if (clicks < 10) {
     temperature.className = 'hot-button tepid';
  } else if (clicks < 13) {
    temperature.className = 'hot-button warm';
  } else if (clicks < 16) {
    temperature.className = 'hot-button hot';
  } else {
     temperature.className = 'hot-button nuclear';
  }
};

let button = document.querySelector('button').addEventListener('click', handleClick);
