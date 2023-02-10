const inputRange = document.querySelector("#font-size-control");
const inputText = document.querySelector("#text");

inputRange.addEventListener("input", () => {
  inputText.style.fontSize = inputRange.value + "px";
});
