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
    IF STATEMENT ASSIGNMENT
========================================= */


function BTN_IfStatment() {
    /* */
    var dateElement = document.getElementById('ifStatment');
    /* */
    var dateSplit = Date().split("");
    var strNew = "";
    /* */
    dateSplit.forEach(ds => {
        if (ds == " ") {
            strNew += "<br>" + ds;
        } else if (ds == "(" || ds == ")") {
            strNew += "";
        } else {
            strNew += ds;
        }
    });
    /* */
    dateElement.innerHTML = strNew;
}