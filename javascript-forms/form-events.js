var handleFocus = (event) => {
  console.log('focus event was fired');
  console.log(event.target.name);
}

var handleBlur = (event) => {
  console.log('blur event was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var userName = document.forms['contact-form'].name;

var email = document.forms['contact-form'].email;

var message = document.forms['contact-form'].message

userName.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
