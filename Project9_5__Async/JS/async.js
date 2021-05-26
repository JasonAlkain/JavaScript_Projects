alert(document.getElementById("p1").innerHTML);
document.getElementById("p1").innerHTML = "Are you ready to view the site?";

if (confirm(document.getElementById("p1").innerHTML)) {
    document.getElementById("p1").innerHTML = "Welcome to the site!";
} else {
    document.getElementById("p1").innerHTML = "<h1>Error 404<h1>";
}