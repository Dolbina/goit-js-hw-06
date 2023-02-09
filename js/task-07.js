// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.
// Вибирає необхідний input та span

const inputSizeControl = document.querySelector("#font-size-control");
const textSizeChange = document.querySelector("#text");


// Вішає слухача на input

inputSizeControl.addEventListener('input', onSizeControlInput);

// Колбек-функція, яка присвоює розмір тексту span в залежності від зміни ползунка.

function onSizeControlInput(event) {
    textSizeChange.style.fontSize = event.currentTarget.value + 'px';
   
}