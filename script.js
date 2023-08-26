function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

let oldAnswer = false;
const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        const currentNumber = document.querySelector('.current-number');
        if (oldAnswer) {
            currentNumber.textContent = '';
            oldAnswer = false;
        }
        if (currentNumber.textContent == 'ERROR!') {
            currentNumber.textContent = '';
        }
        if (currentNumber.textContent.length < 15) {
            currentNumber.textContent += number.textContent;
        }
    });
});

const operators = document.querySelectorAll('.operators');
operators.forEach(operator => {
    operator.addEventListener('click', () => {
        const currentNumber = document.querySelector('.current-number');
        const lastNumber = document.querySelector('.last-number');
        if (currentNumber.textContent == 'ERROR!') {
            currentNumber.textContent = '';
        }
        if (currentNumber.textContent == '') {
            if (operator.textContent == '-') {
                currentNumber.textContent += operator.textContent;
            }
        } else {
            lastNumber.textContent = `${currentNumber.textContent} ${operator.textContent}`;
            currentNumber.textContent = '';
        }
    });
});

const executeOperation = document.querySelector('.equal');
executeOperation.addEventListener('click', () => {
    const currentNumber = document.querySelector('.current-number');
    const lastNumber = document.querySelector('.last-number');
    length = lastNumber.textContent.length;
    
    const operator = lastNumber.textContent.slice(length - 1);
    let x = lastNumber.textContent;
    const num1 = parseFloat(lastNumber.textContent);
    const num2 = parseFloat(currentNumber.textContent);
    switch (operator) {
        case ('+'):
            currentNumber.textContent = Math.round(add(num1, num2) * 100000) / 100000;
            if(currentNumber.textContent.length > 15){
                currentNumber.textContent = (Math.round(add(num1, num2) * 100000) / 100000).toExponential();
            }
            break;
        case ('-'):
            currentNumber.textContent = Math.round(subtract(num1, num2) * 100000) / 100000;
            if(currentNumber.textContent.length > 15){
                currentNumber.textContent = (Math.round(subtract(num1, num2) * 100000) / 100000).toExponential();
            }
            break;
        case ('x'):
            currentNumber.textContent = Math.round(multiply(num1, num2) * 100000) / 100000;
            if(currentNumber.textContent.length > 15){
                currentNumber.textContent = (Math.round(multiply(num1, num2) * 100000) / 100000).toExponential();
            }
            break;
        case ('÷'):
            if (num2 === 0) {
                currentNumber.textContent = 'ERROR!';
                break;
            }
            currentNumber.textContent = Math.round(divide(num1, num2) * 100000) / 100000;
            if(currentNumber.textContent.length > 15){
                currentNumber.textContent = (Math.round(divide(num1, num2) * 100000) / 100000).toExponential();
            }
            break;
    }

    lastNumber.textContent = '';
    oldAnswer = true;
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const lastNumber = document.querySelector('.last-number');
    const currentNumber = document.querySelector('.current-number');
    if (currentNumber.textContent == '') {
        lastNumber.textContent = '';
    } else {
        currentNumber.textContent = '';
    }
    oldAnswer = false;
});