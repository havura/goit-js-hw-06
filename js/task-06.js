const textInput = document.querySelector('#validation-input');
const attributOfEl = Number(textInput.getAttribute("data-length"));

const onInputChange = () => {
    console.log(textInput.value)
    if (textInput.value.length != attributOfEl) {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
    }
    else {
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    }
}

textInput.addEventListener('blur', onInputChange);
