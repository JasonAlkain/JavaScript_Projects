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