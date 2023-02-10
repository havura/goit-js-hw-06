const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

const inputChangeName = function () {
  if (input.value === "") {
    output.textContent = "Anonymous";
  } else {
    output.textContent = input.value;
  }
};

input.addEventListener("input", inputChangeName);
