
const inputText = document.querySelector('#validation-input');

inputText.addEventListener("blur", onBlur);

function onBlur(event) {
   
    if (event.currentTarget.value.length === Number(inputText.getAttribute("data-length"))) {
        inputText.classList.add("valid");
         inputText.classList.remove("invalid");
        
    } else  {
        inputText.classList.add("invalid");
        inputText.classList.remove("valid");
    }

    if (event.currentTarget.value.length === 0) {
        inputText.classList.remove("invalid");
        inputText.classList.remove("valid");
 }
}

