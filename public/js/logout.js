const logout = async () => {
     const method = {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json'
          },
     }
     const response = await fetch('/api/users/logout', method);

     if (response.ok) {
          document.location.replace('/views/layouts/login');
     } else {
          alert(response.statusText);
     }
};

document.querySelector('#logout').addEventListener('click', logout);