// let list = document.querySelector('ul');
// console.log(list)

var request = new XMLHttpRequest();
request.open('GET', 'https://jhttps://valorant-api.com/v1/agentssonplaceholder.typicode.com/users');
request.responseType = 'json';
request.addEventListener('load', function () {
  console.log(request.status);
  console.log(request.response);
  var array = request.response;
  array.forEach(index => {
    let li = document.createElement('li');
    li.textContent = index.name;
    list.appendChild(li);
  })
});
request.send();



var request = new XMLHttpRequest();
request.open('GET', URL);
request.responseType = 'json';
request.addEventListener('load', () => {
  console.log(request.status);
  console.log(request.response);
});
request.send()
