const loginHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const name = document.querySelector('#user').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (name && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginHandler);