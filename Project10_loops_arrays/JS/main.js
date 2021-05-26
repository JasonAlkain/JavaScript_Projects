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