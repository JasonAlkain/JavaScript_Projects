/* ===================================
    Project5: TYPE COERCION
=================================== */

function OnLoad() {
    BTN_TypeCoercion();
    BTN_Infinite();
    BTN_Boolean();
}

function BTN_TypeCoercion() {
    var _A = "5";
    var _B = 5;
    document.getElementById("TypeCoercion").innerHTML = "";
    document.getElementById("TypeCoercion").innerHTML += "Type Coercion: ";
    document.getElementById("TypeCoercion").innerHTML += (typeof(_A) == typeof(_B));
}

function BTN_Infinite() {
    document.getElementById("Infinity").innerHTML = "2E310 = " + (2E310);
    document.getElementById("NegInfinity").innerHTML = "-3E310 = " + (-3E310);
}

function BTN_Boolean() {
    var _A = 15;
    var _B = 5;
    document.getElementById("Boolean").innerHTML = "";
    document.getElementById("Boolean").innerHTML += "Boolean result: ";
    document.getElementById("Boolean").innerHTML += (_A < _B);
}