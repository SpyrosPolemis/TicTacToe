function Game() {
    let winner = null;
    player1Turn = false;
    let squareToMark = 0;

    const gameSquares = document.querySelectorAll(".gamesquare")
    
    gameSquares.forEach((square, index) => {
        square.addEventListener("click", function handleClick() {
            if (winner) {
                return;
            }

            squareToMark = index
            player1Turn = !player1Turn
            if (player1Turn) {
                mark = "X"
            } else {
                mark = "O"
            }
            gameboardModule.getGameboard()[squareToMark].markSquare(mark)
            square.textContent = mark
            square.removeEventListener("click", handleClick)

            winner = gameboardModule.checkForWinner()
            if (winner) {
                    alert(`Winner is Player ${winner}`)
            }
        });
    });
}

const gameboardModule = (function() {
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
        const winningCombinations = [
            [0, 1, 2], // rows
            [3, 4 ,5],
            [6, 7, 8],
            [0, 3, 6], // columns
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8], // diagonals
            [2, 4, 6]
        ]
        for (const [a, b, c] of winningCombinations) {
            if (gameboard[a].getStatus() && gameboard[a].getStatus() === gameboard[b].getStatus() && gameboard[b].getStatus() === gameboard[c].getStatus()) {
                console.log(`Winner is ${gameboard[a].getStatus()}`)
                return gameboard[a].getStatus();
            }
        }
        return null;
    }
    return {printGameboard, getGameboard, checkForWinner}
})();

function createSquare() {
    let status = null;
    const markSquare = function(mark) {
        if (status === null) {
            status = mark;
        }
    }
    const getStatus = function() {
        return status;
    }

    return {markSquare, getStatus}
}

// Testing

function populateBoard() {
    for (let i  = 0; i < 9; i++) {
        gameboardModule.getGameboard()[i].markSquare("X")
    }
}

Game()