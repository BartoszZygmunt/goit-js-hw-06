const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredList = document.querySelector("#ingredients");

ingredients.forEach((element) => {
  const elementLi = document.createElement("li");
  elementLi.textContent = element;
  elementLi.classList.add("item");
  ingredList.append(elementLi);
});
