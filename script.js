let input = document.getElementById('call');
let buttons = document.querySelectorAll('button');

let currentString = "";

buttons.forEach(button => {
  button.addEventListener('click', function() {
    let buttonValue = this.innerHTML;

    if (buttonValue === '=') {
      try {
        currentString = eval(currentString).toString(); 
      } catch (error) {
        currentString = "Error"; 
    } else if (buttonValue === 'Ac') {
      currentString = ""; // Clear the input
    } else if (buttonValue === 'Del') {
      currentString = currentString.slice(0, -1); 
    } else if (buttonValue === '%') {
      try {
        currentString = (parseFloat(currentString) / 100).toString(); 
      } catch (error) {
        currentString = "Error"; 
      }
    } else {
      currentString += buttonValue; 
    }

    input.value = currentString; 
  });
});
