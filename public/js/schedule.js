const addAppointment = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#appointment-firstName').value.trim();
    const lastName = document.querySelector('#appointment-lastName').value.trim();
    const time = document.querySelector('#appointment-time').value.trim();
  
    if (firstName && lastName && time) {
      const response = await fetch(`/api/appointments`, {
        method: 'PUT',
        //** NEED TO LOOK UP CUSTOMER ID BASED ON FIRST? LAST NAME AND SEND THAT */
        body: JSON.stringify({ time, firstName, lastName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create appointment');
      }
    }
  };


  function myFunction(){
    console.log("Testing my function");
  }