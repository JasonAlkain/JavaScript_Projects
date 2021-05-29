var counter = 0;

function Call_Loop() {
    counter = (counter <= 10) ? counter + 1 : 0;
    var text = "Counting:<br>";
    var i = 0;
    while (i < counter) {
        text += (i == 0) ? "--------------------<br>" : ((i % 10) == 0) ? (i + "<br>") : (i + " ");
        i++;
    }
    document.getElementById("Loop").innerHTML = text;
}

function For_Loop() {
    var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
    var text = "Instruments:<br>";

    for (var i = 0; i < instruments.length; i++) {
        text += instruments[i] + "<br>";
    }
    document.getElementById("forLoop").innerHTML = text;
}

function Array() {
    var strAry = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute", "Cello"];
    var text = "Instruments:<br>";

    strAry.forEach(item => { text += item + "<br>"; });

    document.getElementById("array").innerHTML = text;
}


/* ================================================================
    LET KEYWORD ASSIGNMENT
================================================================ */
var global_X = 123;
var letCounter = 0;
document.getElementById("letKeyword_1").innerHTML = "Initial: " + global_X;

function Let_Keyword() {
    let global_X = letCounter++;

    document.getElementById("letKeyword_2").innerHTML = "In scope: " + global_X;
}

document.getElementById("letKeyword_3").innerHTML = "Second check: " + global_X;

/* ================================================================
    END LET KEYWORD ASSIGNMENT
================================================================ */

/* ================================================================
    OBJECT ASSIGNMENT
================================================================ */

function DisplayObect() {
    var objThing = {
        Name: "Son Goku",
        Race: "Saiyan",
        Power: "8001 (9001 in english)",
        Description: function() {
            return this.Name + " is a " + this.Race + " with a power level of " + this.Power + ".";
        }
    }

    document.getElementById("objThing").innerHTML = "Object:<br> " + objThing.Description();
}

/* ================================================================
    END OBJECT ASSIGNMENT
================================================================ */

/* ================================================================
    BREAK AND CONTINUE CHALLENGE
================================================================ */

function getRngInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Breaking() {
    var text = "";
    var i;
    var rng = getRngInt(3, 20);
    for (i = 0; i < 25; i++) {
        if (i === rng) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("broken").innerHTML = text;
}

function Continuing() {
    var text = "";
    var i;
    var rng = getRngInt(3, 20);
    for (i = 0; i < 25; i++) {
        if (i === rng) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continuing").innerHTML = text;
}

/* ================================================================
    END BREAK AND CONTINUE CHALLENGE
================================================================ */