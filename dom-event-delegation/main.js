var ul = document.querySelector('.task-list');
console.log(ul)

ul.addEventListener('click', (e)=> {
  // console.log(e.target);
  // console.log(e.target.nodeName);
  if (e.target.nodeName === 'BUTTON') {
    let closest = e.target.closest('.task-list-item');
    console.log(closest);
    closest.remove()
  }
});
