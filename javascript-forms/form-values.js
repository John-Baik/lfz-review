var form = document.forms['contact-form'];
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const object = {};
  object.userName = form.elements.name.value;
  object.email = form.elements.email.value;
  object.message = form.elements.message.value
  console.log(object)
  form.reset();
});
