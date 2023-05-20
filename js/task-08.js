const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Please fill in all the fields!");
  }

  const myResult = {
    login: email.value,
    password: password.value,
  };

  console.log(myResult);
  event.currentTarget.reset();
}
