const registerForm = document.querySelector(".login-form");

const onHandleSubmitForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Заповність усі поля");
  }

  const userData = { email: email.value, password: password.value };
  console.log(userData);

  registerForm.reset();
};

registerForm.addEventListener("submit", onHandleSubmitForm);
