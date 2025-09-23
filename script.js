function startGame() {
    const player1 = createPlayer("X")
    const player2 = createPlayer("Y")
    let winner = null;
    while (winner === null) {
        //play turn, check for win
        winner = gameboard.checkForWinner()
    }
}

const gameboard = (function() {
    const gameboard = [createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare(), createSquare()]
    const printGameboard = function() {
        console.log(gameboard[0].getStatus() + gameboard[1].getStatus() + gameboard[2].getStatus())
        console.log(gameboard[3].getStatus() + gameboard[4].getStatus() + gameboard[5].getStatus())
        console.log(gameboard[6].getStatus() + gameboard[7].getStatus() + gameboard[8].getStatus())
    };

    const getGameboard = function() {
        return gameboard;
    }

    const checkForWinner = function() {
        printGameboard()
    }
    return {printGameboard, getGameboard, checkForWinner}
})();


function createPlayer(mark) {
    const playerName = `Player ${mark}`
    const getMark = () => mark;
    return {playerName, getMark}
}

function createSquare() {
    let status = null;
    markSquare = function(mark) {
        if (status === null) {
            status = mark;
            gameboard.checkForWinner()
        }
    }
    getStatus = function() {
        return status;
    }

    return {markSquare, getStatus}
}

// Testing

function populateBoard() {
    for (let i  = 0; i < 9; i++) {
        gameboard.getGameboard()[i].markSquare("X")
    }
}
