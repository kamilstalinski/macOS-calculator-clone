const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const coma = document.querySelector(".coma");
const display = document.getElementById("result");

let currentNumber = "";
let result = "";

const displayNumbers = (e) => {
  currentNumber += e.target.textContent;
  display.innerHTML = currentNumber;
};

const handleOperate = (e) => {
  let operator = e.target.textContent;
  let newNumber = "";
};

const handleClear = () => {
  currentNumber = "";
  display.innerHTML = "";
};

numbers.forEach((number) => number.addEventListener("click", displayNumbers));
operators.forEach((operator) =>
  operator.addEventListener("click", handleOperate),
);
clear.addEventListener("click", handleClear);

equals.addEventListener("click", () => {
  console.log(currentNumber);
});
