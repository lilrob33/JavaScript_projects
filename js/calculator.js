const calculator = {
    Display_value: '0',
    First_Operand: null,
    Wait_Second_Operand: false,
    operator: null,
};

function Input_Digit(digit) {
    const { Display_value, Wait_Second_Operand } = calculator;
    if (Wait_Second_Operand === true) {
        calculator.Display_value = digit;
        calculator.Wait_Second_Operand = false;
    } else {
        calculator.Display_value = Display_value === '0' ? digit : Display_value + digit;
    }
}

function Input_decimal(dot) {
    if (calculator.Wait_Second_Operand === true) return;
    if (!calculator.Display_value.includes(dot)) {
        calculator.Display_value += dot;
    }
}

function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_value, operator } = calculator
    const Value_of_Input = parseFloat(Display_value);
    if (operator && calculator.Wait_Second_Operand) {
        calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        const result = Preform_Calculation[operator](Value_Now, Value_of_Input);
        calculator.Display_value = String(result);
        calculator.First_Operand = result;
    }
    calculator.Wait_Second_Operand = true;
    calculator.operator = Next_Operator;
}

const Preform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

function Calculator_Reset() {
    calculator.Display_value = '0';
    calculator.First_Operand = null;
    calculator.Wait_Second_Operand = false;
    calculator.operator = null;
}

function Update_display() {
    const display = document.querySelector('.calculatorScreen');
    display.value = calculator.Display_value;
}

Update_display();
const keys = document.querySelector('.calculatorKeys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_decimal(target.value);
        Update_display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset(target.value);
        Update_display();
        return;
    }
    Input_Digit(target.value);
    Update_display();
})