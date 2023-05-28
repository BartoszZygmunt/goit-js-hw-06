const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredList = document.querySelector("#ingredients");
const fragment = document.createDocumentFragment();

ingredients.forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.textContent = element;
  elementLi.classList.add("item");
  fragment.append(elementLi);
});
ingredList.append(fragment);
