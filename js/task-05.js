const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

const handleInput = () => {
  if (nameInput.value.length > 0) {
    nameOutput.textContent = nameInput.value;
  } else {
    nameOutput.textContent = "Anonymous";
  }
};

nameInput.addEventListener("input", handleInput);
