/**
 * Project3: Math Operators
 */

var counter = 0;
var money = 0;

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