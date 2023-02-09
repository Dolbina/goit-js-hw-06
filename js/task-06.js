// Напиши скрипт, который при потере фокуса на инпуте(событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

// Вибирає необхідний input

const inputText = document.querySelector('#validation-input');


// Додає слухача на input
inputText.addEventListener("blur", onBlur);


// Колбек-функція, яка виконує умову, якщо кількість введенних символів дорівнює кількості в атрибуті data-length, то border зеленого кольору, в інших випадках стає червоним. А якщо в input нічого не введено, то border стає тим кольором, що за замовчуванням.

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

