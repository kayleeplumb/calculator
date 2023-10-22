function add(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtract(num1, num2) {
    return Number(num1) - Number(num2);
}

function multiply(num1, num2) {
    return Number(num1) * Number(num2);
}

function divide(num1, num2) {
    return Number(num1) / Number(num2);
}

function operate(operator, num1, num2) {
    switch (operator) {
        case 'add':
            return add(num1, num2);
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return multiply(num1, num2);
        case 'divide':
            return divide(num1, num2);
        case 'equals':
            return num1;
    }
}

let num1 = '';
let num2 = '';
let operator = '';
let runningTotal = 0;

const text = document.querySelector('#input');
const result = document.querySelector('#result');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {


        // if an operator or equals is selected and there's already one assigned, calculate
        if (button.classList == 'operator' && operator) {
            runningTotal = operate(operator, num1, num2);
            result.textContent = runningTotal;
            num1 = runningTotal;
            operator = button.id;
            num2 = '';
        }
        
        // update operator, num1, or num2 depending on what variables have already been assigned
        if (button.classList == 'operator') {
            operator = button.id;
            console.log("operator: " + operator);
        } else if (!operator) {
            num1 += button.id;
            console.log("num1: " + num1);
        } else {
            num2 += button.id;
            console.log("num2: " + num2);
        }

        // clear if clear button clicked
        if (button.id == 'clear') {
            runningTotal = 0;
            result.textContent = '';
            num1 = '';
            num2 = '';
            operator = '';
            text.textContent = '';
        }

    });
});


// if button is operator and operator is assigned =>
// calculate and reassign total to num1 and button to operator unless operator is equals then leave operator blank
//else if operator not assigned, assign one