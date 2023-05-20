let counterValue = 0;

const buttonInc = document.querySelector('button[data-action="increment"]');
const buttonDec = document.querySelector('button[data-action="decrement"]');
const spanValue = document.querySelector("#value");

const Inc = () => {
  counterValue += 1;
  spanValue.textContent = counterValue;
  console.log("+1");
};

const Dec = () => {
  counterValue -= 1;
  spanValue.textContent = counterValue;
  console.log("-1");
};

buttonInc.addEventListener("click", Inc);
buttonDec.addEventListener("click", Dec);
