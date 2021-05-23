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

var globalVar = "Global";

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