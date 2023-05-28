function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

const handleClick = () => {
  const hexColor = getRandomHexColor();
  body.style.backgroundColor = hexColor;
  spanColor.textContent = hexColor;
};

button.addEventListener("click", handleClick);
