const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const coma = document.querySelector(".coma");
const display = document.getElementById("result");
const prevNumber = document.getElementById("prevNum");

let currentNumber = "";
let previousNumber = "";
let result = "";

const displayNumbers = (e) => {
  currentNumber += e.target.textContent;
  display.innerHTML = currentNumber;

  console.log(previousNumber, currentNumber);
};

const handleOperate = (e) => {
  previousNumber = currentNumber;
  let a = Number(previousNumber);
  let b = Number(currentNumber);
  display.innerHTML = "";
  currentNumber = "";

  switch (e.target.textContent) {
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

  equals.addEventListener("click", () => {
    display.innerHTML = result;
  });
};

const handleClear = () => {
  currentNumber = "";
  previousNumber = "";
  display.innerHTML = "";
};

const handleEquals = () => {};

const flipToNegative = () => {};

numbers.forEach((number) => number.addEventListener("click", displayNumbers));
operators.forEach((operator) =>
  operator.addEventListener("click", handleOperate),
);
clear.addEventListener("click", handleClear);

negative.addEventListener("click", flipToNegative);
