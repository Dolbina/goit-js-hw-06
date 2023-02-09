// Счетчик состоит из спана и кнопок, которые, при клике, должны увеличивать и уменьшать его значение на единицу.
// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.


let counterValue = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

decrementBtn.addEventListener("click", onTargetBtnDecrementClick);
incrementBtn.addEventListener("click", onTargetBtnIncrementClick);

function onTargetBtnDecrementClick() {
    counterValue -= 1;
    counter.textContent = counterValue;
}

function onTargetBtnIncrementClick() {
    counterValue += 1;
    counter.textContent = counterValue;
}