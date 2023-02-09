// Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).

const listWithId = document.querySelector("#categories");

const categoriesEl = listWithId.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

const textH2AndElements = categoriesEl.forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
    
});



