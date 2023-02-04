const listWithId = document.querySelector("#categories");
console.log(listWithId);

const categoriesEl = listWithId.querySelectorAll(".item");
console.log(categoriesEl);
console.log(`Number of categories: ${categoriesEl.length}`);

const textHeaderEl = listWithId.querySelector("h2");
console.log(`Category: ${textHeaderEl.textContent}`);

const countItemsEl = listWithId.querySelectorAll("li");
console.log(`Elements: ${countItemsEl.length}`);
