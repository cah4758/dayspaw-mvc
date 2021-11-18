<<<<<<< HEAD
// Logging in
const loginHandler = async (event) => {
     event.preventDefault();

     // Collect values from the login form
     const name = document.querySelector('#user').value.trim();
     const password = document.querySelector('#password').value.trim();

     if (name && password) {

          try {
               const response = await fetch('/api/users/login', {
                    method: 'POST',
                    body: JSON.stringify({
                         name,
                         password
                    }),
                    headers: {
                         'Content-Type': 'application/json'
                    },
               }).then((response) => {
               if (response.ok) {
                    console.log(this)
                    // If successful, redirect the browser to the profile page
                    document.location.replace('/clients');
                    return true;
               } else {
                    alert(response.statusText);
               }})
          } catch (error) {
               console.error(error);
          }
     }
};
document
     .querySelector('#form')
     .addEventListener('submit', loginHandler);

// -----------------------------------------------------------------------------
// {Employee} field control


//    const dualFill = function(event) {
//         event.preventDefault();

//    }

//    document.querySelector('#user').addEventListener('click', )



// -----------------------------------------------------------------------------
=======
const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (name && password) {
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ name, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
>>>>>>> 94a484325afac43a37af460b1e8f050f8495c508
