var slides;
var dots;


var slideIndex = 1;
ShowSlides(slideIndex);

// Slide button handler
function PlusSlides(n) {
    ShowSlides(slideIndex += n);
}

// Thumbnail image controls
function CurrentSlide(n) {
    ShowSlides(slideIndex = n);
}

// I made this function for error handling and ease of use
function SetRefs() {
    slides = document.getElementsByClassName("slide");
    dots = document.getElementsByClassName("dot");
    console.log(slides);
    console.log(dots);
}

function ShowSlides(n) {
    SetRefs()
    var i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    var curIndex = slideIndex - 1;
    slides[curIndex].style.display = "block";
    dots[curIndex].className += " active";
}


/* ==========================================
    Countdown Timer
========================================== */

// Set the date we're counting down to
var countDownDate = new Date("Sep 3, 2021 20:30:30").getTime();

// Update the count down every 1 second
var x = setInterval(GetTimeRemaining, 1000);

function GetTimeRemaining() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the time differance between now and the count down date
    var timeDif = countDownDate - now;

    /* ========================
        Time calculations for:
        weeks, days, hours, 
        minutes and seconds
    ======================== */
    // calculats weeks remaining
    var weeks = Math.floor((timeDif / (1000 * 60 * 60 * 24)) / 7);
    // calculates days left in the week
    var days = Math.floor((timeDif / (1000 * 60 * 60 * 24)) % 7);
    // calculates hours remaining in the day
    var hours = Math.floor((timeDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    // calculates minutes remaining in the hour
    var minutes = Math.floor((timeDif % (1000 * 60 * 60)) / (1000 * 60));
    // calculates seconds remaining in the minutes
    var seconds = Math.floor((timeDif % (1000 * 60)) / 1000);

    // This will be used to build the str that gets displayed
    var timeStr = "";
    // Check if there is a need to display certain elements
    timeStr += (weeks > 0) ? (weeks + "w ") : "";
    timeStr += (days > 0) ? (days + "d ") : "";
    timeStr += (hours >= 0) ? (hours + "h ") : "";
    timeStr += (minutes >= 0) ? (minutes + "m ") : "";
    timeStr += seconds + "s ";

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = timeStr;

    // If the count down is over, write some text 
    if (timeDif < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}