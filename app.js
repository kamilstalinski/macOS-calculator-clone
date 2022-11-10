const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector(".clear");
const equals = document.querySelector(".equals");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");
const coma = document.querySelector(".coma");
const display = document.querySelector(".result");
const cells = document.querySelectorAll(".cell");

let currentNumber = "";
let previousNumber = "";
let operator = "";

display.innerHTML = "0";

//Main display
const displayNumbers = (e) => {
  if (display.innerHTML === "0" && e.target.textContent === "0") return;
  currentNumber += e.target.textContent;
  display.innerHTML = currentNumber;

  if (display.innerHTML.length >= 8) {
    display.classList.add("small");
  }
  if (display.innerHTML.length >= 12) {
    display.classList.add("xsmall");
  }
  if (display.innerHTML.length >= 18) {
    display.innerHTML = "ERROR";
  }
};

//function that handle operators
const handleOperate = (e) => {
  operator = e.target.textContent;
  previousNumber = currentNumber;
  currentNumber = "";
};

//clearing function
const handleClear = () => {
  currentNumber = "";
  previousNumber = "";
  display.innerHTML = "0";
  display.classList.remove("small");
  display.classList.remove("xsmall");
};

//Function that is making math
const handleEquals = () => {
  if (currentNumber === "" && previousNumber === "") return;
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
  currentNumber = result;
};

//switching to negative value
const switchToNegative = () => {
  if (display.innerHTML === "0") return;
  if (!display.innerHTML.includes("-")) {
    currentNumber = "-" + currentNumber;
    display.innerHTML = currentNumber;
  } else if (display.innerHTML.includes("-")) {
    currentNumber = currentNumber.replace("-", "");
    display.innerHTML = currentNumber;
  }
};

//adding coma to numbers
const addComa = (e) => {
  if (display.innerHTML === "0") {
    currentNumber = "0";
  }
  if (display.textContent.includes(".")) return;

  currentNumber = currentNumber + ".";
  display.innerHTML = currentNumber;
};

//calculating percentage of previous number
const calculatePercentage = () => {
  if (display.innerHTML === "0") return;

  let a = Number(previousNumber);
  let b = Number(currentNumber);

  let result = "";

  if (!a && b) result = b / 100;

  if (a && b) {
    switch (operator) {
      case "+":
        result = a + (a / 100) * b;
        break;
      case "-":
        result = a - (a / 100) * b;
        break;
      case "⨉":
        result = a * ((a / 100) * b);
        break;
      case "÷":
        result = a / ((a / 100) * b);
        break;
    }
  }

  display.innerHTML = result;
};

const blink = () => {
  display.style.opacity = 0;
  setTimeout(() => {
    display.style.opacity = 1;
  }, 100);
};

numbers.forEach((number) => number.addEventListener("click", displayNumbers));
operators.forEach((operator) =>
  operator.addEventListener("click", handleOperate),
);
clear.addEventListener("click", handleClear);
equals.addEventListener("click", handleEquals);
negative.addEventListener("click", switchToNegative);
coma.addEventListener("click", addComa);
percent.addEventListener("click", calculatePercentage);
// cells.forEach((cell) => {

// });
