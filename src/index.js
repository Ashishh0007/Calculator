var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
var dot = false;

function displayWork(value) {
  if (value === "+" || value === "-" || value === "*" || value === "/") {
    operator = value;
    operand1 = parseFloat(display.textContent);
    display.innerText = null;
  } else if (value === "=" || value === "Enter") {
    operand2 = parseFloat(display.textContent);
    display.innerText = null;
    var result = null;
    if (operator === "/" && operand2 === "0") {
      display.innerText = "Error";
    } else {
      result = eval(operand1 + " " + operator + operand2);
      display.innerText = result;
      operand1 = result;
    }
  } else if (value === "AC") {
    operand1 = 0;
    operand2 = null;
    dot = false;
    display.innerText = null;
  } else if (value === "+/-") {
    var num = parseFloat(display.innerText);
    num = num * -1;
    display.innerText = num;
  } else if (value === "%") {
    var num = parseFloat(display.innerText);
    num = num / 100;
    display.innerText = num;
  } else if (value === ".") {
    if (!dot) {
      display.innerText += value;
      dot = true;
    }
  } else if (
    value === "0" ||
    value === "1" ||
    value === "2" ||
    value === "3" ||
    value === "4" ||
    value === "5" ||
    value === "6" ||
    value === "7" ||
    value === "8" ||
    value === "9"
  ) {
    display.innerText += value;
  }

  if (value === "Backspace" || value === "x") {
    var remainedtext = display.innerText.slice(0, -1);
    display.innerText = remainedtext;
  }
}

window.addEventListener("keydown", (event) => {
  var value = event.key;

  displayWork(value);
});

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var value = this.getAttribute("data-value");

    displayWork(value);
  });
}
