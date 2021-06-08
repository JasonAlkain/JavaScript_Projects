/*=================================================================================*/
// Creates and object to keep track of values
const CALCULATOR = {
    //
    Display_Value: '0',
    //
    First_Operand: null,
    //
    Wait_Second_Operand: false,
    //
    Operator: null,
};

/*=================================================================================*/
// This modifies values each time a button is clicked
function Input_Digit(digit) {
    const { Display_Value, Wait_Second_Operand } = CALCULATOR;
    //
    //
    if (Wait_Second_Operand === true) {
        CALCULATOR.Display_Value = digit;
        CALCULATOR.Wait_Second_Operand = false
    } else {
        //
        //
        CALCULATOR.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

/*=================================================================================*/
//
function Input_Decimal(dot) {
    //
    //
    if (CALCULATOR.Wait_Second_Operand === true) return;
    //
    if (!CALCULATOR.Display_Value.includes(dot)) {
        //
        CALCULATOR.Display_Value += dot;
    }
}

/*=================================================================================*/
function Handle_Operand(Next_Operator) {
    const { First_Operand, Display_Value, Operator } = CALCULATOR;
    //
    //
    //
    const VALUE_OF_INPUT = parseFloat(Display_Value);
    //
    //
    if (Operator && CALCULATOR.Wait_Second_Operand) {
        CALCULATOR.Operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        CALCULATOR.First_Operand = VALUE_OF_INPUT;
    } else if (Operator) {
        const VALUE_NOW = First_Operand || 0;
        //
        //
        //
        let result = PERFORM_CALCULATION[Operator](VALUE_NOW, VALUE_OF_INPUT);
        // Here we set a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        // This will remove any trailing 0's
        result = (result * 1).toString();
        CALCULATOR.Display_Value = parseFloat(result);
        CALCULATOR.First_Operand = parseFloat(result);
    }

    CALCULATOR.Wait_Second_Operand = true;
    CALCULATOR.Operator = Next_Operator;

}

/*=================================================================================*/
// Handles the actual calulations 
const PERFORM_CALCULATION = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
};

/*=================================================================================*/
// Resets the Calculator values
function Calculato_Reset() {
    CALCULATOR.Display_Value = '0';
    CALCULATOR.First_Operand = null;
    CALCULATOR.Wait_Second_Operand = false;
    CALCULATOR.Operator = null;
}

/*=================================================================================*/
// Updates the Display
function Update_Display() {
    const DISPLAY = document.querySelector('.calculator-screen');
    DISPLAY.value = CALCULATOR.Display_Value;
    // TODO: Reomve console.log()
    // This is just for testing
    console.log("updated");
}


/*=================================================================================*/
// Updates the display at least once
Update_Display()

//
const _KEYS = document.querySelector('.calculator-keys');
// Adds a listener event to every button
// 'event' in this case may be deprecated...
_KEYS.addEventListener('Click', (event) => {
    // 
    // 
    const { _Target } = event;
    console.log("Event: " + _Target);
    //
    if (!_Target.matches('button')) { return; }
    //
    if (_Target.classList.contains('operator')) {
        Handle_Operator(_Target.value);
        Update_Display();
        return;
    }
    //
    if (_Target.classList.contains('decimal')) {
        Input_Decimal(_Target.value);
        Update_Display();
        return;
    }
    //
    if (_Target.classList.contains('all-clear')) {
        Calculato_Reset();
        Update_Display();
        return;
    }

    //
    Input_Digit(_Target.value);
    Update_Display();
})