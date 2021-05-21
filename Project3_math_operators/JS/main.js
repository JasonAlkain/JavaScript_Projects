/**
 * Project3: Math Operators
 */

var counter = 0;
var day = 0;
var money = 0;
var mass = 100;

function BTN_MathOperator() {
    var _MathID = document.getElementById("Math");
    _MathID.innerHTML = "";
    // Variables
    day++;
    var _ = money;
    if (_ == 0) { _ = 1; }
    money += _;
    // Print to page 
    _MathID.innerHTML = "Day: " + day + "<br>";
    _MathID.innerHTML += "Balance: " + money + "&yen;";
}

function BTN_MathSubtraction() {
    var _MathID = document.getElementById("Math_Sub");
    _MathID.innerHTML = "";
    // Variables
    mass -= 1;
    // Print to page 
    _MathID.innerHTML = "Subtracts 1 with each Click.<br>Mass: " + mass + "<br>";
}

function BTN_MathMultiplication() {
    var _MathID = document.getElementById("Math_Mul");
    _MathID.innerHTML = "";
    // Variables
    var rnd_A = Math.floor(Math.floor(Math.random() * 9) + 1);
    var rnd_B = Math.floor(Math.floor(Math.random() * 9) + 1);
    var math_Mul = rnd_A * rnd_B;
    // Print to page 
    _MathID.innerHTML = "math_Mul: " + rnd_A + " * " + rnd_B + " = " + math_Mul;
}

function BTN_MathDivision() {
    var _MathID = document.getElementById("Math_Div");
    _MathID.innerHTML = "";
    // Variables
    var pi_A = 22;
    var pi_B = 7;
    var math_Div = pi_A / pi_B;
    // Print to page 
    _MathID.innerHTML = "math_Div: " + pi_A + " / " + pi_B + " = " + math_Div;
}

function BTN_MultipleOperators() {
    var _MathID = document.getElementById("Math_MO");
    _MathID.innerHTML = "";
    // Variables
    var pi_A = 22;
    var pi_B = 7;
    var r = 7;
    var C = 2 * (pi_A / pi_B) * r;
    // Print to page 
    _MathID.innerHTML = "math_MO: <br>2 * (" + pi_A + " / " + pi_B + ") * " + r + " = <br>" + C;
}

function BTN_ModulusOperators() {
    var _MathID = document.getElementById("Math_Mod");
    _MathID.innerHTML = "";
    // Variables
    var _A = 25;
    var _B = 6;
    var math_Mod = _A % _B;
    // Print to page 
    _MathID.innerHTML = "math_Mod: " + _A + " % " + _B + " = " + math_Mod;
}

function BTN_ModulusOperators() {
    var _MathID = document.getElementById("Math_Neg");
    _MathID.innerHTML = "";
    // Variables
    var _A = 25;
    var math_Neg = -_A;
    // Print to page 
    _MathID.innerHTML = "math_Neg: " + math_Neg + " [ changed from: " + _A + " ]";
}

function BTN_Increment() {
    var _MathID = document.getElementById("Math_IncDec");
    _MathID.innerHTML = "";
    // Variables
    counter++;
    // Print to page 
    _MathID.innerHTML = "math_IncDec: " + counter;
}

function BTN_Decrement() {
    var _MathID = document.getElementById("Math_IncDec");
    _MathID.innerHTML = "";
    // Variables
    counter--;
    // Print to page 
    _MathID.innerHTML = "math_IncDec: " + counter;
}

function BTN_Random() {
    var _MathID = document.getElementById("Math_RND");
    _MathID.innerHTML = "";
    // Variables
    var rnd = Math.floor(Math.floor(Math.random() * 20) + 1);
    // Print to page 
    _MathID.innerHTML = "math_RND: " + rnd;
}

var stock = 100;

function BTN_Math_MOC() {
    var _MathID = document.getElementById("Math_MOC");
    _MathID.innerHTML = "Value: ";
    // Variables
    var rnd_A = (Math.floor(Math.random() * 10) + 1);
    var rnd_B = (Math.floor(Math.random() * 10) + 1);
    var _sin = Math.sin((rnd_A * rnd_B) * Math.LN10);
    var _ = Math.floor(stock * (_sin / 10));
    if (stock < 15) { _ = rnd_A * 10 }
    stock += _;
    // Print to page 
    _MathID.innerHTML += stock;
    _MathID.innerHTML += "<br>Change: " + _ + "";
}