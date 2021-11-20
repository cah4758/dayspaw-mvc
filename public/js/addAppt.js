
const apptHandler = async (event) => {
     event.preventDefault();
     console.log(event)
     try{
        let name = document.querySelector('#select-name');
        let time = document.querySelector('#select-time');
        name = name.textContent;
        time = time.textContent;

        console.log(name);
        console.log(time);
        
     if (name && time) {
       const response = await fetch(`/api/appointments/${time}`, {
         method: 'PUT',
         //** NEED TO LOOK UP CUSTOMER ID BASED ON FIRST? LAST NAME AND SEND THAT */
         body: JSON.stringify({ name, time }),
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (response.ok) {
        //  document.location.replace('/appointments');
       } else {
         alert('Failed to create appointment');
       }
     }
   }
   catch (error) {console.error(error)}};

document.querySelector("#apptSubmit").addEventListener('submit', apptHandler);

