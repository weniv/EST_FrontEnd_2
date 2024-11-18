let displayValue:string = '0';
let oneNum:string | null = null;
let twoNum:string | null = null;
let operator:string | null = null;

const display = document.querySelector('.display') as HTMLInputElement;
const buttons = document.querySelector('.buttons') as HTMLDivElement;

function updateDisplay(): void {
    display.value = displayValue;
}

function inputNumber(num: string): void {
    displayValue = num;
    
    if (operator === null) {
        if (oneNum === null) {
            oneNum = num;
        } else {
            oneNum += num;
        }
    } else {
        if (twoNum === null) {
            twoNum = num;
        } else {
            twoNum += num;
        }
    }
    console.log(num, oneNum, twoNum);
    updateDisplay();
}

function inputCalculate(op: string): void {
    operator = op;
    console.log(op);
    updateDisplay();
}

function calculator(): void {
    if (oneNum === null || twoNum === null || operator === null) {
        return;
    }

    const one = parseInt(oneNum);
    const two = parseInt(twoNum);

    if (operator === '+') {
        displayValue = (one + two).toString();
    } else if (operator === '-') {
        displayValue = (one - two).toString();
    } else if (operator === '*') {
        displayValue = (one * two).toString();
    } else if (operator === '/') {
        displayValue = (one / two).toString();
    }

    oneNum = displayValue;
    twoNum = null;
    operator = null;

    updateDisplay();
}

function handlerButtonClick(event: Event): void {
    const target = event.target as HTMLButtonElement;
    if (target.tagName !== 'BUTTON') {
        return;
    }
    const value = target.textContent!;

    if ('0123456789'.includes(value)) {
        inputNumber(value);
    } else if ('+-*/'.includes(value)) {
        inputCalculate(value);
    } else {
        calculator();
    }
}

buttons.addEventListener('click', handlerButtonClick);

