let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById("value");

const increment = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
