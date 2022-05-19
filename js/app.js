console.log('We Made It!!!');

function handleForm() {
  const subject = document.getElementById('subject').value;
  const firstName= document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName');
  const message = document.getElementById('message');

  if (subject.toLowerCase() === 'math') {
    message.innerHTML = firstName + ' ' + lastName.value + ': please go to room 201';
  } else if (subject === 'history') {
    message.innerHTML = firstName + ' ' + lastName.value + ': please go to room 405';
  } else {
    message.innerHTML = 'Sorry, ' + firstName + ': we dont have that class';
  }
}

document.getElementById('formSubmit').addEventListener('click', handleForm);
