//
let activePlayer = 'X';
//
let selectedSquares = [];

//
function PlaceX_O(squareNumber) {
    //
    //
    //
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //
        let select = document.getElementById(squareNumber);
        //
        if (activePlayer === 'X') {
            //
            select.style.backgroundImage = 'url("./Images/x.png")';
        } else {
            //
            select.style.backgroundImage = 'url("./Images/o.png")';
        }
        //
        selectedSquares.push(squareNumber + activePlayer);
        //
        CheckWinConditions();
        //
        if (activePlayer === 'X') {
            //
            activePlayer = 'O';
        } else {
            //
            activePlayer = 'X';
        }

        // Now we do audio!!
        //PlayAudio('./Sound/place.mp3');
        // 
        if (activePlayer === 'O') {
            //
            DisableClick();
            //
            setTimeout(() => { ComputersTurn(); }, 1000);
        }
        // it ends in true
        // computer needs this to be true...
        return true;
    }

    function ComputersTurn() {
        //
        let succes = false;
        //
        let pickASquare;
        //
        while (!succes) {
            //
            pickASquare = String(Math.floor(Math.random() * 9));
            //
            if (PlaceX_O(pickASquare)) {
                //
                PlaceX_O(pickASquare);
                //
                succes = true;
            }
        }
    }

}

function CheckWinConditions() {
    //
    if (ArrayIncludes('0X', '1X', '2X')) { DrawWinLine(50, 100, 558, 100) }
    //
    else if (ArrayIncludes('3X', '4X', '5X')) { DrawWinLine(50, 304, 558, 304) }
    //
    else if (ArrayIncludes('6X', '7X', '8X')) { DrawWinLine(50, 508, 558, 508) }
    //
    else if (ArrayIncludes('0X', '3X', '6X')) { DrawWinLine(100, 50, 100, 558) }
    //
    else if (ArrayIncludes('1X', '4X', '7X')) { DrawWinLine(304, 50, 304, 558) }
    //
    else if (ArrayIncludes('2X', '5X', '8X')) { DrawWinLine(508, 50, 508, 558) }
    //
    else if (ArrayIncludes('6X', '4X', '2X')) { DrawWinLine(100, 508, 510, 90) }
    //
    else if (ArrayIncludes('0X', '4X', '8X')) { DrawWinLine(100, 100, 520, 520) }
    //
    //
    else if (ArrayIncludes('0O', '1O', '2O')) { DrawWinLine(50, 100, 558, 100) }
    //
    else if (ArrayIncludes('3O', '4O', '5O')) { DrawWinLine(50, 304, 558, 304) }
    //
    else if (ArrayIncludes('6O', '7O', '8O')) { DrawWinLine(50, 508, 558, 508) }
    //
    else if (ArrayIncludes('0O', '3O', '6O')) { DrawWinLine(100, 50, 100, 558) }
    //
    else if (ArrayIncludes('1O', '4O', '7O')) { DrawWinLine(304, 50, 304, 558) }
    //
    else if (ArrayIncludes('2O', '5O', '8O')) { DrawWinLine(508, 50, 508, 558) }
    //
    else if (ArrayIncludes('6O', '4O', '2O')) { DrawWinLine(100, 508, 510, 90) }
    //
    else if (ArrayIncludes('0O', '4O', '8O')) { DrawWinLine(100, 100, 520, 520) }
    //
    //
    else if (selectedSquares.length >= 9) {
        //
        PlayAudio('./Sound/tie.mp3');
        //
        setTimeout(() => { ResetGame(); }, 1000);
    }


    //
    //
    function ArrayIncludes(squareA, squareB, squareC) {
        //
        const A = selectedSquares.includes(squareA);
        const B = selectedSquares.includes(squareB);
        const C = selectedSquares.includes(squareC);
        //
        //
        if (A === true && B === true && C === true) { return true; }
    }
}

function PlayAudio(audioURL) {
    //
    let audio = new Audio(audioURL);
    //
    audio.play();
}

function DisableClick() {
    //
    body.style.pointerEvents = 'none';
    //
    setTimeout(() => {
        body.style.pointerEvents = 'auto';
    }, 1000);
}

function DrawWinLine(coordX1, coordX2, coordY1, coordY2) {
    //
    const canvas = document.getElementById('win-lines');
    //
    const c = canvas.getContext('2d');
    //
    let x1 = coordX1,
        x2 = coordX2,
        y1 = coordY1,
        y2 = coordY2,
        x = x1,
        y = y1;

    function AnimateLineDrawing() {
        //
        const animationLoop = requestAnimationFrame(AnimateLineDrawing);
        //
        c.clearRect(0, 0, 608, 608);
        //
        c.beginPath();
        //
        c.moveTo(x1, y1);
        //
        c.moveTo(x, y);
        //
        c.lineWidth = 10;
        //
        c.strokeStyle = 'rgba(70, 255, 3, 0.8)';
        //
        c.stroke();
        //
        if (x1 <= x2 && y1 <= y2) {
            //
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop()); }
        }
        //
        if (x1 <= x2 && y1 >= y2) {
            //
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop()); }
        }
    }

    function Clear() {
        //
        const animationLoop = requestAnimationFrame(Clear);
        //
        c.clearRect(0, 0, 608, 608);
    }
    //
    DisableClick();
    //
    PlayAudio('./Sound/winGame.mp3');
    // 
    AnimateLineDrawing();
    //
    setTimeout(() => {
        Clear();
        ResetGame();
    }, 1000);
}