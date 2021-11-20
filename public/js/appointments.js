const notifyHandler = async (event) => {
     event.preventDefault();
     const cust_id = document.querySelector('#customer').getAttribute('value');
     console.log(cust_id);
     if (cust_id) {
       const response = await fetch(`/api/appointments/:${cust_id}`, {
         method: 'POST',
         body: JSON.stringify({ cust_id }),
         headers: { 'Content-Type': 'application/json' },
       });
   
       if (response.ok) {
         alert(`Email notification successfully sent to ${customer.customer_first_name} ${customer.customer_last_name}`)
       } else {
         alert(response.statusText);
       }
     }
   };

document.querySelector('.notifyForm').addEventListener('submit', notifyHandler);