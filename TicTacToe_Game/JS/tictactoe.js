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
            select.style.backgroundImage = 'url("Images/x.png)';
        } else {
            //
            select.style.backgroundImage = 'url("Images/o.png)';
        }
        //
        selectedSquares.push(squareNumber + activePlayer);
        //
        CheckWinConditions();
        //
        if (activePlayer === 'X') {
            //
            activePlayer === 'O';
        } else {
            //
            activePlayer === 'X';
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