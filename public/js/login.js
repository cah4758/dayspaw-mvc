const loginFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  try {
    if (name && password) {
      const response = await fetch("api/users/login", {
        method: "POST",
        body: JSON.stringify({
          name,
          password
        }),
        headers: {
          "Content-Type": "application/json"
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Invalid username or password")
      }
    }
  } catch (error) {
    console.error(error)
  };
};

document
  .querySelector("#form")
  .addEventListener("submit", loginFormHandler);

