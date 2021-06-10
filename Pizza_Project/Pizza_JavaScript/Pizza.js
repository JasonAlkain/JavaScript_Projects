// These variables are common and can be moved outside
var text1 = "<h3>You Ordered:</h3>";
var runningTotal = 0;

function GetSize() {
    //
    var sizeTotal = 0;
    //
    var sizeArray = document.getElementsByClassName("size");
    //
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 += selectedSize + "<br>";
        }
    }
    //
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;
}

function GetTopping() {
    //
    var toppingTotal = 0;
    //
    var selectedTopping = [];
    //
    var toppingArray = document.getElementsByClassName("toppings");

    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: (" + toppingArray[j].value);
            text1 += toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal += toppingTotal;

}

function GetVegetables() {
    var vegetableTotal = 0;
    var selectedVegetables = [];
    var vegetableArray = document.getElementsByClassName("vegetables");

    for (let j = 0; j < vegetableArray.length; j++) {
        if (vegetableArray[j].checked) {
            selectedVegetables.push(vegetableArray[j].value);
            text1 += vegetableArray[j].value + "<br>";
        }
    }

    var vegetableCount = selectedVegetables.length;
    if (vegetableCount > 1) {
        vegetableTotal = (vegetableCount - 1);
    } else {
        vegetableTotal = 0;
    }
    runningTotal += vegetableTotal;

}

// Update
function UpdateDocument() {
    text1 = "<h3>You Ordered:</h3>";
    runningTotal = 0;

    GetSize();
    GetTopping();
    GetVegetables();

    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3> Total: <strong>$" + runningTotal + ".00</strong></h3>";

}