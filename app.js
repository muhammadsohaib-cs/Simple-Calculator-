// script.js

let result = document.getElementById('result');
let buttons = document.querySelectorAll('button[type="button"]');

let currentOperation = '';
let previousOperation = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let value = button.value;

        if (value === '=') {
            try {
                result.value = eval(currentOperation);
                previousOperation = currentOperation;
                currentOperation = '';
            } catch (e) {
                result.value = 'Error';
            }
        } else if (value === 'C') {
            result.value = '';
            currentOperation = '';
            previousOperation = '';
        } else {
            currentOperation += value;
            result.value = currentOperation;
        }
    });
});