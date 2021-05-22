/* =========================================
    TERNARY CHALLENGE
========================================= */

function ternaryChallenge() {
    var Age = prompt("How old are you?");
    var tern = (Age > 18) ? "You can vote!" : "You are not old enough to vote.";
    confirm(tern);
}

/* =========================================
    KEYWORDS
========================================= */

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trial Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik Drives a " +
        Erik.Vehicle_Color + "-colored " +
        Erik.Vehicle_Model + " manufactured in " +
        Erik.Vehicle_Year;
}

/* =========================================
    RESERVED KEYWORD CHALLEGNE
========================================= */
function Player(first, last, race, job, strength, wisdom) {
    this.firstName = first;
    this.lastName = last;
    this.race = race;
    this.job = job;
    this.strength = strength;
    this.wisdom = wisdom;
}

var player_A = new Player("Jason", "Alkain", "Human", "Fighter", 17, 14);
var player_B = new Player("Hitomi", "Saiyori", "Elf", "Ranger", 14, 18);

function reservedChallenge() {
    /**/
    var reserved = document.getElementById("reserved");
    /**/
    var divider = "<br><div style=\"margin: 0 auto; border-top: 1px solid black;\"></div><br>";
    /**/
    reserved.innerHTML = divider;
    /**/
    reserved.innerHTML += "[ Player A ]<br>";
    for (var e in player_A) {
        // Return the value for the current key
        var v = player_A[e];
        // Display both the value and the current key
        reserved.innerHTML += "" + e + ": " + v + "<br>";
    }
    reserved.innerHTML += divider;
    /**/
    reserved.innerHTML += "[ Player B ]<br>";
    for (var e in player_B) {
        // Return the value for the current key
        var v = player_B[e];
        // Display both the value and the current key
        reserved.innerHTML += "" + e + ": " + v + "<br>";
    }
    reserved.innerHTML += divider;
    /**/
}
/* =========================================
    NESTED FUNCTIONS
========================================= */

var nestedCounter = 0;

function nestedClick() {
    /**/
    var Nested = document.getElementById("Nested_Function");
    Nested.innerHTML = nested();
    /**/
    function nested() {
        /**/
        var divider = "<br><div style=\"margin: 0 auto; border-top: 1px solid black;\"></div><br>";
        var clicked = "I have been clicked: ";

        function incrementCounter() { nestedCounter++; }
        incrementCounter();
        return divider + clicked + "<br>" + nestedCounter + divider;

    }
    /**/
}