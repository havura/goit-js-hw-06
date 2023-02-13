function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};


const createBoxes =(amount) => {
  const addElements = [];

  for (let i = 0; i < amount; i++) {
    const divEl = document.createElement("div");
    divEl.style.width = `${30 + 10 * i}px`;
    divEl.style.height = `${30 + 10 * i}px`;
    divEl.style.background = getRandomHexColor();
    addElements.push(divEl);
  };
  refs.boxes.append(...addElements);
};


const getInputValue = () => {
  const amount = refs.input.value;
  createBoxes(amount);
  refs.input.value = "";
};

refs.createBtn.addEventListener('click', getInputValue);

const destroyBoxes = () => {
  refs.boxes.innerHTML = "";
}

refs.destroyBtn.addEventListener('click', destroyBoxes);



