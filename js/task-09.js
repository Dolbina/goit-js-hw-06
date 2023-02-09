// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
// Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Вибирає необхідну кнопку та span

const btnChangeColor = document.querySelector(".change-color");
const changeColorEl = document.querySelector(".color");

// Додає слухача на кнопку
btnChangeColor.addEventListener("click", onChangeBackGroundColorClick);

// Колбек-функція, яка запускає функцію генерації випадкового кольору та змінює стиль фону, виводе номер кольору у span

function onChangeBackGroundColorClick(event) {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  changeColorEl.textContent = color;
}

