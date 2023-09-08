document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let firstOperand = null;
    let secondOperand = null;
    let result = null;
  
    function updateDisplay() {
      display.textContent = currentInput;
    }
  
    function clear() {
      currentInput = "";
      currentOperator = "";
      firstOperand = null;
      secondOperand = null;
      result = null;
      updateDisplay();
    }
  
    function handleNumberClick(number) {
      currentInput += number;
      updateDisplay();
    }
  
    function handleOperatorClick(operator) {
      if (currentOperator) {
        handleEqualsClick();
      }
      firstOperand = parseFloat(currentInput);
      currentInput = "";
      currentOperator = operator;
    }
  
    function handleEqualsClick() {
      if (!firstOperand || !currentOperator || !currentInput) {
        return;
      }
      secondOperand = parseFloat(currentInput);
      switch (currentOperator) {
        case "+":
          result = firstOperand + secondOperand;
          break;
        case "-":
          result = firstOperand - secondOperand;
          break;
        case "*":
          result = firstOperand * secondOperand;
          break;
        case "/":
          result = firstOperand / secondOperand;
          break;
      }
      currentInput = result.toString();
      currentOperator = "";
      firstOperand = result;
      secondOperand = null;
      updateDisplay();
    }
  
    document.getElementById("clear").addEventListener("click", clear);
    document.getElementById("divide").addEventListener("click", () => handleOperatorClick("/"));
    document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
    document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
    document.getElementById("add").addEventListener("click", () => handleOperatorClick("+"));
  
    document.getElementById("seven").addEventListener("click", () => handleNumberClick("7"));
    document.getElementById("eight").addEventListener("click", () => handleNumberClick("8"));
    document.getElementById("nine").addEventListener("click", () => handleNumberClick("9"));
  
    document.getElementById("four").addEventListener("click", () => handleNumberClick("4"));
    document.getElementById("five").addEventListener("click", () => handleNumberClick("5"));
    document.getElementById("six").addEventListener("click", () => handleNumberClick("6"));
  
    document.getElementById("one").addEventListener("click", () => handleNumberClick("1"));
    document.getElementById("two").addEventListener("click", () => handleNumberClick("2"));
    document.getElementById("three").addEventListener("click", () => handleNumberClick("3"));
  
    document.getElementById("zero").addEventListener("click", () => handleNumberClick("0"));
    document.getElementById("decimal").addEventListener("click", () => {
      if (!currentInput.includes(".")) {
        currentInput += ".";
        updateDisplay();
      }
    });
  
    document.getElementById("equals").addEventListener("click", handleEqualsClick);
  });
  