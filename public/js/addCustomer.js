const signupFormHandler = async (event) => {
  event.preventDefault();

<<<<<<< HEAD
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
=======
  const customer_first_name = document
    .querySelector("#first_name")
    .value.trim();
  const customer_last_name = document.querySelector("#last_name").value.trim();
  const customer_phone = document.querySelector("#phone").value.trim();
  const customer_email = document.querySelector("#email").value.trim();
  const dog_name = document.querySelector("#dog_name").value.trim();

  console.log(customer_first_name);

  if (
    customer_first_name &&
    customer_last_name &&
    customer_phone &&
    customer_email &&
    dog_name
  ) {
    const response = await fetch("/api/customers", {
      method: "POST",
      body: JSON.stringify({
        customer_first_name,
        customer_last_name,
        phone,
        customer_email,
        dog_name,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/api/addAppt");
    } else {
      alert(response.statusText);
>>>>>>> 666d3ede26c75948aae487c1e2f5d0ee125266fa
    }
  }
};

document
  .querySelector("#addCustomer")
  .addEventListener("submit", signupFormHandler);
