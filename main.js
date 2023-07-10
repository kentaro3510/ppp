function appendToDisplay(value) {
  document.getElementById('result').value += value;
}



function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  var result = document.getElementById('result').value;
  var answer = eval(result);
  document.getElementById('result').value = answer;
}

function appendToDisplay(value) {
  var display = document.getElementById('result');
  var currentValue = display.value;


  var lastCharacter = currentValue[currentValue.length - 1];
  if (isOperator(lastCharacter) && isOperator(value)) {
    return;
  }

  display.value += value;
}

function isOperator(value) {
  return ['+', '-', '*', '/', '.'].includes(value);
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  var result = document.getElementById('result').value;
  var answer = eval(result);
  document.getElementById('result').value = answer;
}

function appendToDisplay(value) {
  var display = document.getElementById('result');
  var currentValue = display.value;

  
  if (value === '0' && (currentValue === '' || isOperator(currentValue[currentValue.length - 1]))) {
    return;
  }


 if (value === '00' && (currentValue === '' || isOperator(currentValue[currentValue.length - 1]))) {
    return;
  }

if (value === '.' && (currentValue === '' || isOperator(currentValue[currentValue.length - 1]))) {
    return;
  }
  
  var lastCharacter = currentValue[currentValue.length - 1];
  if (isOperator(lastCharacter) && isOperator(value)) {
    return;
  }

  display.value += value;
}

function isOperator(value) {
  return ['+', '-', '*', '/', '.'].includes(value);
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  var result = document.getElementById('result').value;
  var answer = eval(result);
  document.getElementById('result').value = answer;
}

