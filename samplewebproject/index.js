document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault(); // prevent browser from submitting form

  const { value } = document.querySelector('input');

  const header = document.querySelector('h1');
  if (value.includes('@')) {
    header.innerHTML = 'Looks good';
  } else {
    header.innerHTML = 'Invalid email';
  }
});