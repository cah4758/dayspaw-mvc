const signupFormHandler = async (event) => {
  event.preventDefault();

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
    }
  }
};

document
  .querySelector("#addCustomer")
  .addEventListener("submit", signupFormHandler);
