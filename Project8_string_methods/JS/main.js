/* =========================================
    CONCAT() METHOD
========================================= */

var globalVar = "Global";

function BTN_CONCAT() {
    /* */
    var concatStr = document.getElementById("ConcatStr");
    /* */
    var divOpener = "<div style=\"margin: 0 auto; border-top: 1px solid black; border-bottom: 1px solid black; border-radius: 8px;\">";
    var divCloser = "</div>";
    var CenterStr = "<p>String is at the center of the concatenating method.</p>";
    /* */
    var _ = "";
    var wholeStr = _.concat(divOpener, CenterStr, divCloser);
    /* */
    concatStr.innerHTML = wholeStr;
}

/* =========================================
    CONCAT() METHOD
========================================= */

function BTN_SLICER() {
    /* */
    var concatStr = document.getElementById("slicer");
    /* */
    var divOpener = "<div style=\"margin: 0 auto; border-top: 1px solid black; border-bottom: 1px solid black; border-radius: 8px;\">";
    var divCloser = "</div>";
    var CenterStr = "String is at the center of the concatenating method.";
    /* */
    /* */
    concatStr.innerHTML = CenterStr.slice(24, CenterStr.length - 1);
}

/* =========================================
    MORE METHODS CHALLENGE
========================================= */

/* =========================================
    UPPER AND LOWER METHOD
========================================= */

function BTN_UPPER() {
    /* */
    var strElement = document.getElementById("upperLower");
    /* */
    var strMod = strElement.innerText.toUpperCase();
    /* */
    /* */
    strElement.innerHTML = strMod;
}

function BTN_LOWER() {
    /* */
    var strElement = document.getElementById("upperLower");
    /* */
    var strMod = strElement.innerText.toLowerCase();
    /* */
    /* */
    strElement.innerHTML = strMod;
}

/* =========================================
    SEARCH() METHOD
========================================= */

function BTN_SEARCH() {
    /* */
    var Sercher = document.getElementById("searched");
    var Result = document.getElementById("result");
    var SearchTerm = document.getElementById("searchTerm").value;
    /* */
    function myFunction(strSearch, term) {
        var n;
        if (term != "") {
            n = strSearch.search(term);
            if (n == -1) {
                n = "Unable to find a match.<br>Try again?";
            } else {
                n = "Found a match!<br>" + term;
            }

        } else {
            n = "Search bar is empty. Please enter something.".toUpperCase();
        }
        return n;
    }

    var result = myFunction(Sercher.innerHTML, SearchTerm);
    /* */
    Result.innerHTML = result;
}

/* =========================================
    END MORE METHODS CHALLENGE
========================================= */

/* =========================================
    NUMBER METHODS
========================================= */
function BTN_TOSTR() {
    /* */
    var toStr = document.getElementById("toStr");
    /* */
    var pi = 22 / 7;
    /* */
    toStr.innerHTML =
        "Variable Value:<br>" +
        pi + "<br>" +
        "Variable Type:<br>" +
        typeof(pi) + "<br><br>" +
        "Variable Value:<br>" +
        pi.toString() + "<br>" +
        "Variable Type:<br>" +
        typeof(pi.toString());
}