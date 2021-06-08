//
let activePlayer = 'X';
//
let selectedSquares = [];

// Function to place an 'X' or an 'O'
function PlaceX_O(squareNumber) {
    //
    //
    //
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //
        let select = document.getElementById(squareNumber);
        console.log(squareNumber);
        console.log(select);
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
        PlayAudio('./Sound/place.mp3');
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

// Checks if there is a winning row or a tie game
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

function DisableClick() {
    //
    body.style.pointerEvents = 'none';
    //
    setTimeout(() => {
        body.style.pointerEvents = 'auto';
    }, 1000);
}

function PlayAudio(audioURL) {
    //
    let audio = new Audio(audioURL);
    //
    audio.play();
}

function DrawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //
    const CANVAS = document.getElementById('win-lines');
    //
    const _C = CANVAS.getContext('2d');
    //
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;


    //
    function AnimateLineDrawing() {
        //
        const ANIMATION_LOOP = requestAnimationFrame(AnimateLineDrawing);
        //
        _C.clearRect(0, 0, 608, 608);
        //
        _C.beginPath();
        //
        _C.moveTo(x1, y1);
        //
        _C.lineTo(x, y);
        //
        _C.lineWidth = 10;
        //
        _C.strokeStyle = 'rgba(70, 255, 3, 0.8)';
        //
        _C.stroke();
        //
        if (x1 <= x2 && y1 <= y2) {
            //
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(ANIMATION_LOOP); }
        }
        // 
        if (x1 <= x2 && y1 >= y2) {
            //
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(ANIMATION_LOOP); }
        }
    }

    function Clear() {
        // Gets the current animation frame
        const ANIMATION_LOOP = requestAnimationFrame(Clear);
        // Clears canavs
        _C.clearRect(0, 0, 608, 608);
        // Stops animation
        cancelAnimationFrame(ANIMATION_LOOP);
    }
    // Disables click
    DisableClick();
    // Play win game sound.
    PlayAudio('./Sound/winGame.mp3');
    // Start animating line draw
    AnimateLineDrawing();
    // Reset game after a 1 second
    setTimeout(() => {
        Clear();
        ResetGame();
    }, 1000);
}

// Resets game board
function ResetGame() {
    // Loop over the 9 square elements
    for (let i = 0; i < 9; i++) {
        // Gets the square element
        let square = document.getElementById(String(i));
        // cleans up the backgounds of the square
        square.style.background = '';
    }
    // Resets array for next game
    selectedSquares = [];
}