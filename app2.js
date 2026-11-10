

const ButtonsNumAndOpr = document.querySelectorAll("button");
const ScreenCalculator = document.querySelector(".screen");

for (let i = 0; i < ButtonsNumAndOpr.length; i++) {
  ButtonsNumAndOpr[i].addEventListener("click", _ => {
    const ButtonValue = ButtonsNumAndOpr[i].textContent;

    if (ButtonValue == "C") {
      clearValue();
    } else if (ButtonValue == "=") {
      calculatorResult();
    } else if (ButtonValue == ".") {
      appendPoint();
    } else {
      appendValue(ButtonValue);
    }
  })
};


function clearValue() {
  ScreenCalculator.value = "";
};

function calculatorResult() {
  ScreenCalculator.value = eval(ScreenCalculator.value);
};

function appendPoint() {
  let sprat = ScreenCalculator.value.split(/[+/*-]/);
  let lastSprat = sprat[sprat.length - 1];
  if (lastSprat.includes(".")) return;
  ScreenCalculator.value += ".";
};

function appendValue(thing) {
  ScreenCalculator.value += thing;
};

