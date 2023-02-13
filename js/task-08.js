const registerForm = document.querySelector(".login-form");

const onHandleSubmitForm = (event) => {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  const userData = { email: email.value, password: password.value };

  console.log(userData);

  if (email.value === "" || password.value === "") {
     return alert("Заповність усі поля");
  }

   event.currentTarget.reset();
};
 
registerForm.addEventListener("submit", onHandleSubmitForm);
 

