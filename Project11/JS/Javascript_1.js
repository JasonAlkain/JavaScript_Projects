/* =================================================
    SWITCH STATEMENT ASSIGNMENT
================================================= */

function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("color_input").value;
    var Color_Str = " is a great color!";
    switch (Colors) {
        case "Red":
            Color_Str += "<br>In color psychology, red provokes the strongest emotions of any color. While cool colors like green and blue are generally considered peaceful and calming, red is considered the warmest and most contradictory of the colors. In fact, this fiery hue has more opposing emotional associations than any other color: Red is linked to passion and love as well as power and anger.";
            Color_Str += "<br><a href=\"https://www.frontiersin.org/articles/10.3389/fnhum.2015.00212/full\"> [*] </a>";
            Color_Output = "Red" + Color_Str;
            break;
        case "Blue":
            Color_Str += "<br>Blue is a color often found in nature such as the pale blue of a daytime sky or the rich dark blue of a deep pool of water. It is for this reason perhaps that people often describe the color blue as calm and serene. Yet as a cool color, blue can sometimes seem icy, distant, or even cold.";
            Color_Str += "<br><a href=\"https://www.frontiersin.org/articles/10.3389/fpsyg.2015.00368/full\"> [*] </a>";
            Color_Output = "Blue" + Color_Str;
            break;
        case "Green":
            Color_Str += "<br>Green is a cool color because it has shorter wavelengths. While our eyes need to adjust to see colors with longer wavelengths, they don't need to adjust at all to see cool colors like green.";
            Color_Str += "<br><a href=\"https://journals.sagepub.com/doi/10.1177/2158244014525423\"> [*] </a>";
            Color_Output = "Green" + Color_Str;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
            break;
    }
    document.getElementById("Output").innerHTML = Color_Output;
}
/* =================================================
    END SWITCH STATEMENT ASSIGNMENT
================================================= */
/* =================================================
    DOCUMENT.GETELEMENTSBYCLASSNAME() METHOD ASSIGNMENT
================================================= */

function MultiClass() {
    var mClass = document.getElementsByClassName("multiClass");
    var _ = "";
    _ += "<ul style=\"list-style-type: none; margin: 0 30%;\">";
    _ += "<li style=\"padding: 8px; margin: 4px auto; border: 1px solid black; border-radius: 8px; cursor: pointer;\">Saiyan</li>";
    _ += "<li style=\"padding: 8px; margin: 4px auto; border: 1px solid black; border-radius: 8px; cursor: pointer;\">Tamaranian</li>";
    _ += "<li style=\"padding: 8px; margin: 4px auto; border: 1px solid black; border-radius: 8px; cursor: pointer;\">Kryptonian</li>";
    _ += "</ul>";
    mClass[1].innerHTML = _;
}

/* =================================================
    END DOCUMENT.GETELEMENTSBYCLASSNAME() METHOD ASSIGNMENT
================================================= */
/* =================================================
    CANVAS CHALLENGE
================================================= */

function BTN_DrawCircle() {
    var c = document.getElementById("canvas_Name");
    var ctx = c.getContext("2d");

    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#65FF8050";
    ctx.fill();
}

function BTN_DrawTriangle() {
    var c = document.getElementById("canvas_Name");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(100, 300);
    ctx.lineTo(300, 300);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "#6044FF50";
    ctx.fill();
}

/* =================================================
    END CANVAS CHALLENGE
================================================= */