// calculator.ts

// 계산기에 필요한 변수들을 선언합니다
let displayValue: string = '0';
let firstNumber: number | null = null;
let operator: string | null = null;
let isWaitingForSecondNumber: boolean = false;

// HTML 요소를 가져옵니다
const display = document.querySelector('.display') as HTMLInputElement;
const buttons = document.querySelector('.buttons') as HTMLDivElement;

// 화면에 숫자를 표시하는 함수
function updateDisplay(): void {
    display.value = displayValue;
}

// 숫자 버튼을 눌렀을 때 실행되는 함수
function inputNumber(number: string): void {
    if (isWaitingForSecondNumber) {
        displayValue = number;
        isWaitingForSecondNumber = false;
    } else {
        // 현재 화면에 0만 있다면 새로운 숫자로 바꾸고, 아니면 뒤에 붙입니다
        displayValue = displayValue === '0' ? number : displayValue + number;
    }
    updateDisplay();
}

// 연산자 버튼을 눌렀을 때 실행되는 함수
function inputOperator(op: string): void {
    const currentNumber = parseFloat(displayValue);

    // 첫 번째 숫자가 없다면 현재 숫자를 저장합니다
    if (firstNumber === null) {
        firstNumber = currentNumber;
    } else if (operator) {
        // 이미 첫 번째 숫자와 연산자가 있다면 계산을 수행합니다
        const result = calculate();
        displayValue = String(result);
        firstNumber = result;
    }

    isWaitingForSecondNumber = true;
    operator = op;
    updateDisplay();
}

// 실제 계산을 수행하는 함수
function calculate(): number {
    const secondNumber = parseFloat(displayValue);
    
    if (operator === '+') return firstNumber! + secondNumber;
    if (operator === '-') return firstNumber! - secondNumber;
    if (operator === '*') return firstNumber! * secondNumber;
    if (operator === '/') return firstNumber! / secondNumber;
    
    return secondNumber;
}

// = 버튼을 눌렀을 때 실행되는 함수
function calculateResult(): void {
    // 필요한 값들이 모두 있는지 확인합니다
    if (firstNumber === null || operator === null) return;

    const result = calculate();
    displayValue = String(result);
    
    // 계산이 끝났으므로 모든 값을 초기화합니다
    firstNumber = null;
    operator = null;
    isWaitingForSecondNumber = false;
    
    updateDisplay();
}

// C 버튼을 눌렀을 때 실행되는 함수
function clearCalculator(): void {
    displayValue = '0';
    firstNumber = null;
    operator = null;
    isWaitingForSecondNumber = false;
    updateDisplay();
}

// 버튼 클릭 이벤트를 처리하는 함수
function handleButtonClick(event: Event): void {
    const target = event.target as HTMLButtonElement;
    if (!target.matches('button')) return;

    const value = target.textContent!;

    // 눌린 버튼의 종류에 따라 다른 함수를 실행합니다
    if ('0123456789'.includes(value)) {
        inputNumber(value);
    } else if ('+-*/'.includes(value)) {
        inputOperator(value);
    } else if (value === '=') {
        calculateResult();
    } else if (value === 'C') {
        clearCalculator();
    }
}

// 버튼 클릭 이벤트 리스너를 등록합니다
buttons.addEventListener('click', handleButtonClick);

// 초기 화면을 표시합니다
updateDisplay();