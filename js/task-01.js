const categoriesList = document.querySelector("#categories");
const items = categoriesList.querySelectorAll("li.item");
const categoriesCount = items.length;

console.log(`Liczba kategorii: ${categoriesCount}`);

items.forEach((element) => {
  console.log("Kategoria: " + element.querySelector("h2").textContent);
  console.log("Elementów: " + element.querySelectorAll("li").length);
});
