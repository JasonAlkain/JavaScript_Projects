/*==============================
 * FUNCTION ASSIGNMENT
 ==============================*/
var counter = 0;

function BTN_OnClick() {
    counter++;
    document.getElementById('point').innerHTML = "Click Count: " + counter;
}