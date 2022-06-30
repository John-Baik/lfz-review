/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('local-storage');

window.addEventListener('beforeunload', () => {
  const stringify = JSON.stringify(todos);
  localStorage.setItem('local-storage', stringify);
});

todos = JSON.parse(previousTodosJSON);
console.log(todos);
