const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const coma = document.querySelector(".coma");
const display = document.querySelector(".result");

let currentNumber = "";
let previousNumber = "";
let operator = "";

const displayNumbers = (e) => {
  currentNumber += e.target.textContent;
  display.innerHTML = currentNumber;

  if (display.innerHTML.length >= 8) {
    display.classList.add("small");
  }
  if (display.innerHTML.length >= 12) {
    display.classList.add("xsmall");
  }
};

const handleOperate = (e) => {
  operator = e.target.textContent;
  previousNumber = currentNumber;
  currentNumber = "";
};

const handleClear = () => {
  currentNumber = "";
  previousNumber = "";
  display.innerHTML = "0";
  display.classList.remove("small");
  display.classList.remove("xsmall");
};

const handleEquals = () => {
  let result = "";

  let a = Number(previousNumber);
  let b = Number(currentNumber);
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "⨉":
      result = a * b;
      break;
    case "÷":
      result = a / b;
      break;
  }
  display.innerHTML = result;
};

const switchToNegative = () => {
  if (!display.innerHTML.includes("-")) {
    currentNumber = "-" + currentNumber;
    display.innerHTML = currentNumber;
  }
};

const addComa = (e) => {
  currentNumber = currentNumber + ".";
  display.innerHTML = currentNumber;

  if (e.target.textContent === "." && display.innerHTML.includes(".")) return;
};

numbers.forEach((number) => number.addEventListener("click", displayNumbers));
operators.forEach((operator) =>
  operator.addEventListener("click", handleOperate),
);
clear.addEventListener("click", handleClear);
equals.addEventListener("click", handleEquals);
negative.addEventListener("click", switchToNegative);
coma.addEventListener("click", addComa);
