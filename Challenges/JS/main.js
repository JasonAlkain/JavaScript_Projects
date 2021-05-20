// Concatenating strings together then adding it to the web page
var concat_Str = "Concatenated String: " + " \"A\" " + " \"B\" " + " \"C\" ";
document.write(concat_Str);

/* ==============================================================
    EVENT CHALLENGE
============================================================== */

function BTN_OnClick() {
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