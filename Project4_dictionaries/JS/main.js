/* ===================================
    Project4: Dictionary
=================================== */


function BTN_Dict() {
    document.getElementById("Dictionary").innerHTML = "";

    var Person = {
        First_Name: "Zachary",
        Last_Name: "Aars",
        Race: "Human",
        Age: "27",
        Gender: "Male"
    }

    for (var e in Person) {
        //Return the value for the current key
        var v = Person[e];
        document.getElementById("Dictionary").innerHTML += "[ " + e + ": " + v + " ]<br>";
    }
}

function BTN_Dict_RM() {
    document.getElementById("Dict_RM").innerHTML = "Age: ";

    var Person = {
        First_Name: "Zachary",
        Last_Name: "Aars",
        Race: "Human",
        Age: "27",
        Gender: "Male"
    }

    delete Person.Age;
    document.getElementById("Dict_RM").innerHTML += Person.Age;
}