

const logout = async (event) => {
     event.preventDefault();

     const method = {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
     }

     const response = await fetch('api/users/logout', method);
     console.log(response)
     if (response.ok) {
          document.location.replace('/login');
     } else {
          alert(response.statusText);
     }
};

document.querySelector('#logout').addEventListener('click', logout);