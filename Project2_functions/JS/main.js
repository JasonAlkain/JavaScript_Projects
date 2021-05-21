/* ==============================================================
    FUNCTION ASSIGNMENT
============================================================== */
var counter = 0;

function BTN_OnClick() {
    counter++;
    document.getElementById('point').innerHTML = "Click Count: " + counter;
}
/* ==============================================================
    END FUNCTION ASSIGNMENT
============================================================== */

/* ==============================================================
    EVENT CHALLENGE
============================================================== */

function BTN_Operator() {
    // clear the element text
    document.getElementById('date').innerHTML = "";
    // split the date at every space
    var dateSplit = Date().split("");
    // Start the new string with
    var strNew = "";
    // Iterate through the
    dateSplit.forEach(ds => {
        if (ds == " ") {
            strNew += "<br>" + ds;
        } else if (ds == "(" || ds == ")") {
            strNew += "";
        } else {
            strNew += ds;
        }
    });

    strNew += "";

    document.getElementById('date').innerHTML = strNew;
    // document.getElementById('date').innerHTML = Date();
}


/* ==============================================================
    END EVENT CHALLENGE
============================================================== */