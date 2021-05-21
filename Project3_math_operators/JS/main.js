/**
 * Project3: Math Operators
 */

var counter = 0;
var money = 0;
var mass = 100;

function BTN_MathOperator() {
    var _MathID = document.getElementById("Math");
    _MathID.innerHTML = "";
    // Variables
    counter++;
    var _ = money;
    if (_ == 0) { _ = 1; }
    money += _;
    // Print to page 
    _MathID.innerHTML = "Day: " + counter + "<br>";
    _MathID.innerHTML += "Balance: " + money + "&yen;";
}

function BTN_MathSubtraction() {
    var _MathID = document.getElementById("Math_Sub");
    _MathID.innerHTML = "";
    // Variables
    counter++;
    mass -= 1;
    // Print to page 
    _MathID.innerHTML = "Subtracts 1 with each Click.<br>Mass: " + mass + "<br>";
}