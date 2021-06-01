/** */
function validateForm() {
    var fname = document.forms["rsvpForm"]["fname"].value;
    var lname = document.forms["rsvpForm"]["lname"].value;
    var email = document.forms["rsvpForm"]["email"].value;
    var message = document.forms["rsvpForm"]["message"].value;

    if (fname == "") {
        alert("First name must be filled out");
        return false;
    }

    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }

    if (email == "") {
        alert("Email must be filled out");
        return false;
    }

    if (message == "") {
        alert("Message must be filled out");
        return false;
    }
}

/** */