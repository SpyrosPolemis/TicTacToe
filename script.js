let gameboard = [null * 9]

function createSquare() {
    let status = null;
    markX = function() {
        status = "X";
    }
    markY = function() {
        status = "Y";
    }
    getStatus = function() {
        return status;
    }

    return {markX, markY, getStatus}
}