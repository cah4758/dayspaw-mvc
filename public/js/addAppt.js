
const apptHandler = async (event) => {
  event.preventDefault();
  try {
    const appointment_time = document.getElementById("appointment-time").value;
    const customer_id = document.getElementById("appointment-name").value;
    console.log(customer_id);
    console.log(appointment_time);
    if (customer_id && appointment_time) {
      const response = await fetch(`/api/appointments/${appointment_time}`, {
        method: "PUT",
        //** NEED TO LOOK UP CUSTOMER ID BASED ON FIRST? LAST NAME AND SEND THAT */
        body: JSON.stringify({ appointment_time, customer_id }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        document.location.replace("/api/appointments");
      } else {
        alert("Failed to create appointment");
      }
    } else {
      console.log("It didn't happen!");
    }
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#addAppt").addEventListener("submit", apptHandler);
