let gameboard = [createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare()]

function createSquare() {
    let status = null;
    markX = function() {
        status = "X";
        checkForWinner()
    }
    markY = function() {
        status = "Y";
        checkForWinner()
    }
    getStatus = function() {
        return status;
    }

    return {markX, markY, getStatus}
}

function checkForWinner() {
    if (gameboard[0].getStatus() === gameboard[1].getStatus() && gameboard[0].getStatus() === gameboard[2].getStatus()) {
        console.log("Winner is X")
    } else {
        console.log("No winner yet")
    }
}

// Testing

function populateBoard() {
    for (let i  = 0; i < 9; i++) {
        gameboard[i] = createSquare()
    }
    for (let i  = 0; i < 9; i++) {
        gameboard[i].markX()
    }
}