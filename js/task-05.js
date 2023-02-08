
const inputName = document.querySelector('#name-input');
const outputName = document.querySelector("#name-output");

inputName.addEventListener('input', onInputName);


function onInputName(event) {
    if (event.currentTarget.value !== "") {
        outputName.textContent = event.currentTarget.value;
    }
    else if (event.currentTarget.value === "") {
        outputName.textContent = "Anonymous";
    };
   
}