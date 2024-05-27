let display = document.querySelector('.display');

function calculator () {
// take in operator & operand input
let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';
display.textContent = 0;

// use operand input to signify which operation is going to happen

function operate (num1, num2, appaRaider) {
    num1 = +num1;
    num2 = +num2;
    appaRaider;
    switch(appaRaider) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function displayUpdate () {
    const numbers = document.querySelectorAll('.numbers');
    const operators = document.querySelectorAll('.operators');
    const decimal = document.querySelector('.decimal');

    function numberUpdate () {
        for (let number of numbers) {
            number.addEventListener('click', () => {
                if (operator == '') {
                    operand1 += number.textContent;
                    display.textContent = operand1;
                } else {
                    operand2 += number.textContent;
                    display.textContent = operand2;
                }
            })
        }
    }

    function operatorUpdate () {
        for (let oper8er of operators) {
            oper8er.addEventListener('click', () => {
                if (operand1 == '') {
                    return;
                }
                operator = oper8er.textContent}
            );
        }
    }

    function decimalUpdate () {
        decimal.addEventListener('click', () => {
            if(display.textContent.at(display.textContent.length - 1) != '.') {
                display.textContent += '.';
                if (operand1) {
                    operand1 += '.';
                } else {
                    operand2 += '.';
                }
            }
        })
    }
    
    numberUpdate();
    operatorUpdate();
    decimalUpdate();
}

displayUpdate();

function clearDelete () {
    function clearBtn () {
        let clear = document.querySelector('.clear');
        clear.addEventListener('click', () => {
            operand1 = '';
            operand2 = '';
            operator = '';
            result = '';
            return display.textContent = 0;
        })
    }

    function deleteBtn () {
        let del = document.querySelector('.delete');
        del.addEventListener('click', () => {
            if (operand2 != '') {
                operand2 = operand2.slice(0, -1);
                display.textContent = operand2;
            } else {
                operand1 = operand1.slice(0, -1);
                display.textContent = operand1;
            }
        })
    }

    clearBtn();
    deleteBtn();
}

clearDelete();


function equalsBtn () {
    let equals = document.querySelector('.equals');
    equals.addEventListener('click', () => {
        if (operand2 == '') {
            return;
        } else if (result != '') {
            operand1 = '';
            operand2 = '';
            operator = '';
            result = '';
            return display.textContent = 0;
        }
        result = operate(operand1, operand2, operator);
        display.textContent = result;
    })
}

equalsBtn();


// Gotchas:

// make sure only one set of operands are calculated at a time.
// round long decimal numbers
// implement a failsafe where "=" only runs when numbers & operators are defined
// implement a failsafe if the user divides by 0
// prevent decimals from repeatedly being entered. A number can only take one decimal.
// Add keyboard support!
}

calculator();