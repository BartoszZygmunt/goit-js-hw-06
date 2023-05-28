const myInput = document.querySelector("#validation-input");

const handleBlur = () => {
  if (myInput.value.length === myInput.dataset.length) {
    myInput.classList.remove("invalid");
    myInput.classList.add("valid");
  } else {
    myInput.classList.remove("valid");
    myInput.classList.add("invalid");
  }
};

myInput.addEventListener("blur", handleBlur);
