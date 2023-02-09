// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
}

// Вибирає необхідні кнопки, div, input

const inputNumberEl = document.querySelector("#controls").firstElementChild;

const btnCreate = document.querySelector("[data-create]");

const btnDestroy = document.querySelector("[data-destroy]");

const createDiv = document.querySelector("#boxes");


let amount = null;

// Додає слухача на поле input

inputNumberEl.addEventListener("input", onNumberInput);

// Додає слухача на кнопку Create

btnCreate.addEventListener("click", createBox);

// Додає слухача на кнопку Destroy

btnDestroy.addEventListener("click", destroyBoxes);

// Колбек-функція, яка получає введене значення з input

function onNumberInput(event) {
  amount = event.currentTarget.value;
}

// Колбек-функція, яка викликає функцію createBoxes

function createBox() {
  createBoxes(amount);
}
  // Функція, яка створює стільки div (з потрібними розмірами (збільшуя розмір на 10px кожний наступний div) та з випадковим кольором фону) скільки введено в input

function createBoxes(amountBox){

  for (let i = 0; i < amountBox; i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.width = 30 + i  * 10 + "px";
    boxEl.style.height = 30 + i  * 10 + "px";
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.margin = "10px";
    createDiv.append(boxEl);
    console.log(boxEl);
  }
}

// Колбек-функція, яка видаляє всі створенні елементи div

function destroyBoxes() {
  createDiv.innerHTML = "";
}

 