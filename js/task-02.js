
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Вибирає список ul#ingredients, в який треба вставити всі <li>

const ulIngredients = document.querySelector("ul#ingredients");

// Перебирає ingredients та повертає новий масив, у який додає: <li>, назву, клас

const itemIngredientsEl = ingredients.map(element => {
  const createEl = document.createElement("li");
  createEl.textContent = element;
  createEl.classList.add("item");
  return createEl;
});


// Додає в DOM-дерево список 
 ulIngredients.append(...itemIngredientsEl);



