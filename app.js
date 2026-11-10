
let screenCalculator = document.querySelector(".screen");


let btnC = document.querySelector(".C");

const Operators = Object.freeze({
  Divid: '/',
  Multiply: '*',
  Minus: '-',
  Plus: '+'
})

let btnDivide = document.querySelector(".divide");
let btnMultiply = document.querySelector(".multiply");
let btnMinus = document.querySelector(".minus");
let btnPlus = document.querySelector(".plus");

let btnEquals = document.querySelector(".equals");

let btnOne = document.querySelector(".one");
let btnTwo = document.querySelector(".two");
let btnThree = document.querySelector(".three");
let btnFour = document.querySelector(".four");
let btnFive = document.querySelector(".five");
let btnSix = document.querySelector(".six");
let btnSeven = document.querySelector(".seven");
let btnEight = document.querySelector(".eight");
let btnNine = document.querySelector(".nine");
let btnZero = document.querySelector(".zero");

let btnPoint = document.querySelector(".point");


    
function TextToOperator(text) {
  let regexOperator = /\*|\+|\/|-/g;
  return text.match(regexOperator);
}

function TextToNumber(text) {
  let RegxNumber = /\d+(\.\d+)?/g;
  return text.match(RegxNumber);
}

function RunOperator(Operator, Numbers) {
  switch (Operator[0]) {
    case Operators.Divid:
      return +Numbers[0] / +Numbers[1];
      break;
    case Operators.Multiply:
      return +Numbers[0] * +Numbers[1];
      break;
    case Operators.Minus:
      return +Numbers[0] - +Numbers[1];
      break;
    case Operators.Plus:
      return +Numbers[0] + +Numbers[1];
      break;
  }
}



btnC.addEventListener("click", _ => {
  screenCalculator.value = "";
})

btnDivide.addEventListener("click", _ => {
  if (screenCalculator.value == "" || TextToOperator(screenCalculator.value)) return;
  screenCalculator.value += '/';
})

btnMultiply.addEventListener("click", _ => {
  if (screenCalculator.value == "" || TextToOperator(screenCalculator.value)) return;
  screenCalculator.value += '*';
})

btnMinus.addEventListener("click", _ => {
  if (screenCalculator.value == "" || TextToOperator(screenCalculator.value)) return;
  screenCalculator.value += '-';
})

btnPlus.addEventListener("click", _ => {
  if (screenCalculator.value == "" || TextToOperator(screenCalculator.value)) return;
  screenCalculator.value += '+';
})

function checkTwoNumber(text) {
  let regexE = /^\d+(\.\d+)?\s*[*+\-/]\s*\d+(\.\d+)?$/;
  return regexE.test(text);
}
btnEquals.addEventListener("click", _ => {
  if (!checkTwoNumber(screenCalculator.value)) return;
  screenCalculator.value = RunOperator(
    TextToOperator(screenCalculator.value),
    TextToNumber(screenCalculator.value));
})

btnOne.addEventListener("click", _ => {
  screenCalculator.value += "1";
})

btnTwo.addEventListener("click", _ => {
  screenCalculator.value += "2";
})

btnThree.addEventListener("click", _ => {
  screenCalculator.value += "3";
})

btnFour.addEventListener("click", _ => {
  screenCalculator.value += "4";
})

btnFive.addEventListener("click", _ => {
  screenCalculator.value += "5";
})

btnSix.addEventListener("click", _ => {
  screenCalculator.value += "6";
})

btnSeven.addEventListener("click", _ => {
  screenCalculator.value += "7";
})

btnEight.addEventListener("click", _ => {
  screenCalculator.value += "8";
})

btnNine.addEventListener("click", _ => {
  screenCalculator.value += "9";
})

btnZero.addEventListener("click", _ => {
  screenCalculator.value += "0";
})

btnPoint.addEventListener("click", _ => {
  screenCalculator.value += ".";
})

