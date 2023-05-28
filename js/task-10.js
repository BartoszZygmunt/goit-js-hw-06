const boxesContainer = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
  let size = 30;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    fragment.appendChild(box);
    size += 10;
  }

  boxesContainer.appendChild(fragment);
};

const destroyBoxes = () => {
  boxesContainer.innerHTML = "";
};

const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const input = document.querySelector("input");

createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);
