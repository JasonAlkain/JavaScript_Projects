/* =========================================
    LOCAL AND GLOBAL VARIABLE
========================================= */

var globalVar = "Global";

function BTN_LocalGlobal() {
    /**/
    var localGlobal = document.getElementById("Local_and_Global");
    /**/
    var divider = "<div style=\"margin: 0 auto; border-top: 1px solid black;\"></div>";
    var localVar = "Local";
    /**/
    localGlobal.innerHTML =
        divider + "Global Variable: " +
        globalVar + "<br>Local Variable: " +
        localVar + divider;
}

/* =========================================
    METHOD ASSIGNMENT
========================================= */


function BTN_Scope() {
    /* */
    var dateElement = document.getElementById('date');
    /* */
    var dateHours = new Date().getHours();
    if (dateHours < 12) {
        dateElement.innerHTML = "How Are you ths morning? | The hour is: " + dateHours;
    } else {
        dateElement.innerHTML = "How Are you this afternoon? | The hour is: " + dateHours;
    }

    dateElement.innerHTML = strNew;
}

/* =========================================
    IF/ELSE/ELSE-IF STATEMENT ASSIGNMENT
========================================= */


function BTN_IfStatment() {
    /* */
    var dateElement = document.getElementById('ifStatment');
    /* */
    var dateSplit = Date().split("");
    console.log(Date());
    var strNew = "";
    /* */
    dateSplit.forEach(ds => {
        if (ds == " ") {
            strNew += "<br>" + ds;
        } else if (ds == "(" || ds == ")") {
            strNew += "";
        } else {
            // this is the problem child...
            // should use '+=' not '='
            strNew = ds;
        }
    });
    console.log(strNew);
    /* */
    dateElement.innerHTML = strNew;
}

/* =========================================
    IF/ELSE/ELSE-IF STATEMENT ASSIGNMENT
========================================= */

/* */
function BTN_Roll() {
    /* */
    var Calc = document.getElementById('Calc');
    var acAmount = document.getElementById('acAmount').value;
    /* */
    var dice = Math.floor(Math.floor(Math.random() * 20) + 1);
    var strNew = "";
    if (dice > acAmount) {
        strNew = "Hit";
    } else if (dice == acAmount) {
        strNew = "Tie";
    } else {
        strNew = "Missed";
    }
    /* */
    Calc.innerHTML = strNew;

}