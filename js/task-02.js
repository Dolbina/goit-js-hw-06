// В HTML есть пустой список ul#ingredients.
// В JavaScript есть массив строк.
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.


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



