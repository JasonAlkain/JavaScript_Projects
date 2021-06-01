function BTN_DisplayType(char) {
    var charType = char.getAttribute("data-Family_Relation-type")
    alert(char.innerHTML + " is the " + charType + ".");
}