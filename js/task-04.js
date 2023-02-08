
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