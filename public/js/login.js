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
       });
   
       if (response.ok) {
         // If successful, redirect the browser to the profile page
         document.location.replace('/clients');
       } else {
         alert(response.statusText);
       }}
       catch(error) {
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