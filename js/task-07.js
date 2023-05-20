const myControl = document.querySelector("#font-size-control");
const mySpan = document.querySelector("#text");

const handleChange = () => {
  mySpan.style.fontSize = myControl.value + "px";
  console.log(mySpan.style.fontSize);
};

myControl.addEventListener("input", handleChange);
