/* ===================================
    Project3: Math Operators
=================================== */


/* ======================================================================
In this section I wanted to explain a few things that I did in
as much detail as I can. These will correlate with comments that
have a number of '*'.
NOTES:
*
    Each block I write follows a lose algorithm of:
    1: Fetch info
    2: Global Variables
    3: Local Variables
    4: Logic/Branch
    5: Call/Sub Program
    6: Retun/End
This keeps things as consistent and easy to follow as posible.
Steps can be added/remove as needed.

**
    I named it '_' because I am used to garbage collection 
looking for this as the temporary variable that gets 
auto disposed of at the end of the block

***
    This section is used to print and/or change content. 
Ussually the "return" of my function/method.
In most of these cases this section is used to update the 
element id content.

****
    Here I am using a random and floor method from the Math class.
I am using these for aesthetic reasons...
====================================================================== */

/* ===================================
    Global Variables
=================================== */
var counter = 0; // Used for incrementing/decrementing
var day = 0; // Tracks the day for a yen a day doubled
var money = 0; // Tracks the money for a yen a day doubled
var mass = 1000; // Tracks the number for subtraction 
var stock = 100; // Sets the starting point for the stock algorithm

/* ===================================
    BTN_Addition
=================================== */
//*
function BTN_Addition() {
    /* Get the element */
    var _MathID = document.getElementById("Math_Add");
    // Empty the inner html of the element
    _MathID.innerHTML = "";
    /* Variables */
    day++; // Increment the day by 1
    // Create a tempary (temp) holder for current money
    var _ = money; // **
    // check if _ is 0: if it is then set it to 1
    if (_ == 0) { _ = 1; }
    // Add _ to current money
    money += _;
    /* Print to page */
    // ***
    _MathID.innerHTML = "Day: " + day + "<br>";
    _MathID.innerHTML += "Balance: " + money + "&yen;";
}

/* ===================================
    BTN_MathSubtraction
=================================== */
function BTN_MathSubtraction() {
    /* Get the element */
    var _MathID = document.getElementById("Math_Sub");
    _MathID.innerHTML = "";
    /* Variables */
    var value = 1;
    mass -= value; // subtract the vaule from the global mass variable
    /* Print to page */
    _MathID.innerHTML = "Subtracts 1 with each Click.<br>Mass: " + mass + "<br>";
}

/* ===================================
    BTN_MathMultiplication
=================================== */
function BTN_MathMultiplication() {
    var _MathID = document.getElementById("Math_Mul");
    _MathID.innerHTML = "";
    /* Variables */
    // ****
    var rnd_A = Math.floor(Math.floor(Math.random() * 9) + 1);
    var rnd_B = Math.floor(Math.floor(Math.random() * 9) + 1);
    var math_Mul = rnd_A * rnd_B;
    /* Print to page */
    _MathID.innerHTML = "math_Mul: " + rnd_A + " * " + rnd_B + " = " + math_Mul;
}

/* ===================================
    BTN_MathDivision
=================================== */
function BTN_MathDivision() {
    var _MathID = document.getElementById("Math_Div");
    _MathID.innerHTML = "";
    /* Variables */
    // If you know... you know...
    var pi_A = 22; // a-22
    var pi_B = 7; // 7-b 
    var math_Div = pi_A / pi_B; // divide the things!!
    /* Print to page */
    // I separated them out for ease of reading
    _MathID.innerHTML =
        "math_Div: " +
        pi_A + " / " +
        pi_B + " = " +
        math_Div;
}

/* ===================================
    BTN_MultipleOperators
=================================== */
function BTN_MultipleOperators() {
    var _MathID = document.getElementById("Math_MO");
    _MathID.innerHTML = "";
    /* Variables */
    // Round 2! Get it?
    var pi_A = 22; // a-22
    var pi_B = 7; // 7-b 
    var r = 7; // radious
    var C = 2 * (pi_A / pi_B) * r; // Circular...
    /*
    Okay but really this is just version of calculating
    the circumference. One should really use 'Math.PI'.
    'Math.PI' is a bit more accurate.
    */
    /* Print to page */
    // I separated them out for ease of reading...
    // okay it's kind of hard to read but looks pretty
    _MathID.innerHTML =
        "math_MO: <br>2 * (" +
        pi_A + " / " +
        pi_B + ") * " +
        r + " = " +
        "<br>" + C;
}

/* ===================================
    BTN_ModulusOperators
=================================== */
function BTN_ModulusOperators() {
    var _MathID = document.getElementById("Math_Mod");
    _MathID.innerHTML = "";
    /* Variables */
    /* 
    These variables are just to make life easy
    They don't reference anything 
    for that I am sorry...
    */
    var _A = 25;
    var _B = 6;
    // I used modulus... (ﾟｰﾟ;)
    var math_Mod = _A % _B;
    /* Print to page */
    _MathID.innerHTML = "math_Mod: " + _A + " % " + _B + " = " + math_Mod;
}

/* ===================================
    BTN_ModulusOperators
=================================== */
function BTN_ModulusOperators() {
    var _MathID = document.getElementById("Math_Neg");
    _MathID.innerHTML = "";
    /* Variables */
    /* 
    I could have use a random number generator
    but copy and paste seemed...
    easier... ¯\_ (ツ)_/¯ 
    */
    var _A = 25;
    // I slapped a '-' in front of '_A'...
    var math_Neg = -_A;
    // I did things this way so that I show what the 
    /* Print to page */
    _MathID.innerHTML = "math_Neg: " + math_Neg + " [ changed from: " + _A + " ]";
}

/* ===================================
    BTN_Increment
=================================== */
function BTN_Increment() {
    var _MathID = document.getElementById("Math_IncDec");
    _MathID.innerHTML = "";
    /* Variables */
    counter++; // Increment counter by 1
    /* Print to page */
    _MathID.innerHTML = "math_IncDec: " + counter;
}

/* ===================================
    BTN_Decrement
=================================== */
function BTN_Decrement() {
    var _MathID = document.getElementById("Math_IncDec");
    _MathID.innerHTML = "";
    /* Variables */
    counter--; // Decrement counter by 1
    /* Print to page */
    _MathID.innerHTML = "math_IncDec: " + counter;
}

/* ===================================
    BTN_Random
=================================== */
function BTN_Random() {
    var _MathID = document.getElementById("Math_RND");
    _MathID.innerHTML = "";
    /* Variables */
    // Simply put a random number generator that returns an int.
    var rnd = Math.floor(Math.floor(Math.random() * 20) + 1);
    /* Print to page */
    _MathID.innerHTML = "math_RND: " + rnd;
}

/* ===================================
    BTN_Math_MOC
=================================== */
function BTN_Math_MOC() {
    var _MathID = document.getElementById("Math_MOC");
    _MathID.innerHTML = "Value: ";
    /* Variables */
    // Random number generators for use in the sin calculation
    var rnd_A = (Math.floor((Math.random() * 10) + 1));
    var rnd_B = (Math.floor((Math.random() * 10) + 1));
    // Sin calculation
    var _sin = Math.sin((rnd_A * rnd_B) * Math.LN10); // Added 'Math.LN10' for fun...
    /*
    Temporary variable used to floor the result of:
    - the sin calculation 
    - the current stock value
    This gives use the change the stock will undertake
    */
    var change = Math.floor(stock * (_sin / 10));
    // Check the stock for a minmum of 15
    if (stock < 15) { change = rnd_A * 10 }
    // add the change in the stock to the stock value
    stock += change;
    /* Print to page */
    _MathID.innerHTML += stock;
    _MathID.innerHTML += "<br>Change: " + change;
}