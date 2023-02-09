// Напиши скрипт управления формой логина.
// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
// Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
// Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.


// // Вибирає необхідну form

const formInput = document.querySelector(".login-form");

// Додає слухача до form

formInput.addEventListener('submit', onValidSubmit);

// Колбек-функція, яка виводить у консоль обєкт з введенними данними (email, password) та очищує значення полей, а також виводе попередження alert, якщо поля форми не заповненні.

function onValidSubmit(event) {
    event.preventDefault();
    const {
        elements: {email, password}
    } = event.currentTarget;
    if (email.value === "" || password.value === "") {
        return alert('Please fill in all the fields!');
    }
    console.log(`Login: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();

}