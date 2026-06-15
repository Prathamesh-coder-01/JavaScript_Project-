const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let previousInput = "";
let operator = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    // Numbers and decimal
    if (!isNaN(value) || value === ".") {
      if (value === "." && currentInput.includes(".")) return;

      currentInput += value;
      updateDisplay();
      return;
    }

    // Clear
    if (value === "C") {
      currentInput = "";
      previousInput = "";
      operator = "";
      updateDisplay();
      return;
    }

    // Operators
    if (["+", "-", "*", "/"].includes(value)) {
      if (currentInput === "") return;

      previousInput = currentInput;
      operator = value;
      currentInput = "";

      updateDisplay();
      return;
    }

    // Equal
    if (value === "=") {
      if (previousInput === "" || currentInput === "") return;

      const num1 = Number(previousInput);
      const num2 = Number(currentInput);

      let result;

      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          if (num2 === 0) {
            display.value = "Error";
            currentInput = "";
            previousInput = "";
            operator = "";
            return;
          }
          result = num1 / num2;
          break;
      }

      currentInput = result.toString();
      previousInput = "";
      operator = "";

      updateDisplay();
    }
  });
});

function updateDisplay() {
  if (operator) {
    display.value = previousInput + " " + operator + " " + currentInput;
  } else {
    display.value = currentInput || "0";
  }
}