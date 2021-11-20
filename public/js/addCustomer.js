
  const signupFormHandler = async (event) => {
    event.preventDefault();
    
    const firstName = document.querySelector('#first-name-signup').value.trim();
    const lastName = document.querySelector('#last-name-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const dog = document.querySelector('#dog-signup').value.trim();
  
    if (firstName && lastName && phone && email && dog) {
      const response = await fetch('/api/customers', {
        method: 'POST',
        body: JSON.stringify({ firstName, lastName, phone, email, dog}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/customers');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#addCustomer')
    .addEventListener('submit', signupFormHandler);
  