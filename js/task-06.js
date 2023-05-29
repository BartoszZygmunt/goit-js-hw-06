const myInput = document.querySelector("#validation-input");

const handleBlur = () => {
  const expectedLength = parseInt(myInput.dataset.length, 10);
  if (myInput.value.length === expectedLength) {
    myInput.classList.remove("invalid");
    myInput.classList.add("valid");
  } else {
    myInput.classList.remove("valid");
    myInput.classList.add("invalid");
  }
};

myInput.addEventListener("blur", handleBlur);
