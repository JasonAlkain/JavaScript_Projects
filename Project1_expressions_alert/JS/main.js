/*
// // Basic alert function
// alert("Hello, World!");

// // Simple window.alert() function
// window.alert("Hello, World! (window.alert())");

// // Writes 'Hello, World!' to the webpage.
// document.write('Hello, World!');

// // Creates a variable named 'A' and then passes it to the webpage
// var A = "This is a string!";
// document.write(A);

// // Creates a variable named 'str_Display' and then passes it to window.alert
// var str_Display = "This is a triumph! [^v^]";
// window.alert(str_Display);

// // Creates a variable named 'str_Display_Con' with an escape character and then passes it to window.alert
// var str_Display_Con = "This is a triumph! [^v^]\nWe do what we must because we can!";
// window.alert(str_Display_Con);

// // Concatenating strings together then adding it to the web page
// document.write(" \"A\" " + " \"B\" " + " \"C\" ");

// // Multiple variable declaration
// var family = "Aars",
//     mom = "Amy",
//     sister = "Breanna";

// document.write(" Mom = " + mom + " " + family);
// document.write(" Sister = " + sister + " " + family);

// // Set font color of a variable
// var family = family.fontcolor("blue");
// document.write(" Mom = " + mom + " " + family);
// document.write(" Sister = " + sister + " " + family);

// // Arithmatic
// document.write(3 + 7 + 8 + 2 + 9 + 1 + 4 + 6);
*/

/* ==============================================================
    BASIC JAVASCRIPT PROJECTS SUBMISSION ASSIGNMENT
============================================================== */
// [X] Utilize the window.alert() and document.write() methods.
// [X] Assign string values to two variables and concatenate the variables together.
// [X] Assign a color to at least one variable using the fontcolor() method.
// [X] Write an expression.
// [ ] Add comments throughout your JavaScript explaining your code

// Initialize two varaiables
var str_1 = "Set A",
    str_2 = "Set B";

// set the font color of the str_2 to red
var str_2 = str_2.fontcolor("red");

// A variable expression
var expression = 37 + 73;

window.alert("37 + 73 = " + expression);
window.alert("Set string str_2 to:\n" + str_2);

document.write(str_1 + "\n" + str_2);