const buttons = document.querySelectorAll(".buttons button");
const display = document.querySelector(".display");
let displayValue = "0";
let pendingValue;
let evalStringArray = [];

for (const button of buttons) {
  button.addEventListener("click", function(e) {
    const value = e.target.innerText;
    if (value === "C") {
      displayValue = "0";
      pendingValue = undefined;
      evalStringArray = [];
    } else if (value === "/" || value === "*" || value === "-" || value === "+") {
      pendingValue = displayValue;
      displayValue = "0";
      evalStringArray.push(pendingValue);
      evalStringArray.push(value);
    } else if (value === ".") {
      if (!displayValue.includes(".")) {
        displayValue += ".";
      }
    } else if (value === "=") {
      evalStringArray.push(displayValue);
      const evaluation = eval(evalStringArray.join(" "));
      displayValue = evaluation + "";
      evalStringArray = [];
    } else {
      if (displayValue === "0") {
        displayValue = value;
      } else {
        displayValue += value;
      }
    }
    display.innerText = displayValue;
  });
}
