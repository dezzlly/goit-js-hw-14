const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

const ul = document.getElementById("ingredients");
const fragment = document.createDocumentFragment();

for (const ingredient of ingredients) {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  fragment.appendChild(li);
}

ul.appendChild(fragment);
