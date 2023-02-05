const listWithId = document.querySelector("#categories");

const categoriesEl = listWithId.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

const textH2AndElements = categoriesEl.forEach((element) => {
    console.log(`Category: ${element.querySelector("h2").textContent}`);
    console.log(`Elements: ${element.querySelectorAll('li').length}`);
    
});



