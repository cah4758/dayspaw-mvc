const apptHandler = async (event) => {
     event.preventDefault();
     console.log(event)
     try{
     const time = document.querySelector('#appointment-time').value.trim();
     const name = document.querySelector('#appointment-name').value.trim();
     const firstLast = name.split(" ");
     console.log(firstLast);
     const firstName = firstLast[0];
     const lastName = firstLast[1];

     if (firstName && lastName && time) {
       const response = await fetch(`/api/appointments/${time}`, {
         method: 'PUT',
         //** NEED TO LOOK UP CUSTOMER ID BASED ON FIRST? LAST NAME AND SEND THAT */
         body: JSON.stringify({ time, customer }),
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
   }
   catch (error) {console.error(error)}};

document.querySelector("#addAppt").addEventListener('submit', apptHandler);