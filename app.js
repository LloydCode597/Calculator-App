// Get references to the display and buttons
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".calculator .buttons button");

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Function to handle button clicks
function handleButtonClick(event) {
  const buttonValue = event.target.innerText;

  // Handle different button values (numbers, operators, etc.)
  if (buttonValue === "=") {
    // Calculate the result
    calculate();
  } else if (buttonValue === "C") {
    // Clear the display
    clearDisplay();
  } else {
    // Append the button value to the display
    display.value += buttonValue;
  }
}

// Function to calculate the result
function calculate() {
  try {
    const result = eval(display.value); // Note: Using eval can be a security risk in some cases
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}

// Function to clear the display
function clearDisplay() {
  display.value = "";
}
