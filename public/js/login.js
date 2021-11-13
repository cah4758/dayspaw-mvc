// Logging in
const loginHandler = async (event) => {
     event.preventDefault();
     // Collect input field values
     const name = document.querySelector('#user').value.trim();
     const password = document.querySelector('#password').value.trim();

     if (name && password) {
          // Send a POST request to the API endpoint to grab and deconstruct the body object 
          try {
               const userMethod = {
                    method: 'POST',
                    body: JSON.stringify({
                         name,
                         password
                    }),
                    headers: {
                         'Content-Type': 'application/json'
                    },
               }
               const response = await fetch('/api/users/login', userMethod);
               console.log(response)
               if (response.ok) {
                    document.location.replace('/views/layouts/main.handlebars');
               } else {
                    alert(response.statusText);
               }
          } catch (error) {
               alert(response.statusText + 'Try seeding the database')
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