const notifyHandler = async (event) => {
     event.preventDefault();
     const cust_id = document.querySelector('#notifyForm').getAttribute('value');
     console.log(document.querySelector('#notifyForm').getAttribute('value'))
     console.log(cust_id);
     if (cust_id) {
       const response = await fetch(`/api/appointments/${cust_id}`, {
         method: 'POST',
         body: JSON.stringify({ firstName, lastName, phone, email, dog}),
         headers: { 'Content-Type': 'application/json' },
       });
   
       if (response.ok) {
         document.location.replace('/customers');
       } else {
         alert(response.statusText);
       }
     }
   };

document.querySelector('#notifyForm').addEventListener('submit', notifyHandler)