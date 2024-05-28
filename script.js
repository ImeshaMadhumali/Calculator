let input = document.getElementById('call');
let buttons = document.querySelectorAll('button');

let currentString = "";

buttons.forEach(button => {
  button.addEventListener('click', function() {
    let buttonValue = this.innerHTML;

    if (buttonValue === '=') {
      try {
        currentString = eval(currentString).toString(); // Evaluate the expression
      } catch (error) {
        currentString = "Error"; // Handle errors during evaluation
      }
    } else if (buttonValue === 'Ac') {
      currentString = ""; // Clear the input
    } else if (buttonValue === 'Del') {
      currentString = currentString.slice(0, -1); // Delete the last character
    } else if (buttonValue === '%') {
      try {
        currentString = (parseFloat(currentString) / 100).toString(); // Convert to percentage
      } catch (error) {
        currentString = "Error"; // Handle errors during conversion
      }
    } else {
      currentString += buttonValue; // Append the button value to the current string
    }

    input.value = currentString; // Update the input field
  });
});
