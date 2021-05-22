/* ===================================
    Project5: TYPE COERCION
=================================== */

function OnLoad() {
    TypeCoercion();
    Infinite();
    _Boolean();
    ConsoleCMD();
    DoubleEqual();
    TripleEqual();
    OperatorFun();
    NotOperatorFun();
}

function TypeCoercion() {
    var _A = "5";
    var _B = 5;
    document.getElementById("TypeCoercion").innerHTML = "";
    document.getElementById("TypeCoercion").innerHTML += "Type Coercion: ";
    document.getElementById("TypeCoercion").innerHTML += (typeof(_A) == typeof(_B));
}

function Infinite() {
    document.getElementById("Infinity").innerHTML = "2E310 = " + (2E310);
    document.getElementById("NegInfinity").innerHTML = "-3E310 = " + (-3E310);
}

function _Boolean() {
    var _A = 15;
    var _B = 5;
    document.getElementById("Boolean").innerHTML = "";
    document.getElementById("Boolean").innerHTML += "Boolean result: ";
    document.getElementById("Boolean").innerHTML += (_A < _B);
}

function ConsoleCMD() {
    console.log(783 + 327);
}

function DoubleEqual() {
    var _A = "5";
    var _B = 5;
    var _C = 5;
    document.getElementById("DoubleEqual_A").innerHTML = "";
    document.getElementById("DoubleEqual_A").innerHTML += "Double Equal A:<br> 5 === 5 <br>";
    document.getElementById("DoubleEqual_A").innerHTML += (typeof(_B) == typeof(_C));

    document.getElementById("DoubleEqual_B").innerHTML = "";
    document.getElementById("DoubleEqual_B").innerHTML += "Double Equal B:<br> \"5\" === 5 <br>";
    document.getElementById("DoubleEqual_B").innerHTML += (typeof(_A) == typeof(_B));
}

function TripleEqual() {
    var _A = "5";
    var _B = 5;
    var _C = 5;
    document.getElementById("TripleEqual_A").innerHTML = "";
    document.getElementById("TripleEqual_A").innerHTML += "Triple Equal A:<br> 5 === 5 <br>";
    document.getElementById("TripleEqual_A").innerHTML += (_B === _C);

    document.getElementById("TripleEqual_B").innerHTML = "";
    document.getElementById("TripleEqual_B").innerHTML += "Triple Equal B:<br> \"5\" === 5 <br>";
    document.getElementById("TripleEqual_B").innerHTML += (_A === _B);
}

function OperatorFun() {
    /**/
    var operator = document.getElementById("operator");
    operator.innerHTML = "";
    /**/
    var divider = "<br><div style=\"margin: 0 auto; border-top: 1px solid black;\"></div><br>";
    var _A = "5";
    var _B = 5;
    var _C = 5;
    /**/
    operator.innerHTML += divider;
    /**/
    operator.innerHTML +=
        "Operator And:<br>" +
        _B + " == " + _C + " && \'_A\' === \'5\' <br>" +
        (_B == _C && _A === "5") +
        divider;
    /**/
    operator.innerHTML +=
        "Operator And:<br>" +
        _B + " == " + _C + " && \'" + _A + "\' === \'divider\' <br>" +
        (_B == _C && _A === "divider") +
        divider;
}

function NotOperatorFun() {
    /**/
    var operator = document.getElementById("notOperator");
    operator.innerHTML = "";
    /**/
    var divider = "<br><div style=\"margin: 0 auto; border-top: 1px solid black;\"></div><br>";
    var _A = "5";
    var _B = 5;
    var _C = 5;
    /**/
    operator.innerHTML += divider;
    /**/
    operator.innerHTML +=
        "Operator Not:<br>" +
        _B + " != " + _C + "<br>" +
        (_B != _C) +
        divider;
    /**/
    operator.innerHTML +=
        "Inverted Answer:<br>" +
        "!(" + _B + " == " + _C + " )<br>" +
        !(_B == _C) +
        divider;
}