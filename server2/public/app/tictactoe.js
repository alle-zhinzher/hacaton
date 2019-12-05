const socket = io.connect();
let myTurn = true;
let symbol;
const messageOutput = document.getElementById("messages");
const cells = document.getElementsByClassName("cell");

function allCells(callback){
    Array.prototype.forEach.call(cells, callback);
}

function disableCellsSwitcher(value){
    allCells((cell) => cell.disabled = value);
}

function isFullyFilled(board){
    return board.reduce((a, b) => a + b).length === 9;
}

function getBoard() {
    const board = [];
    allCells((cell) => board.push(cell.innerText || ''));
    return board;
}

function isGameOver() {
    const board = getBoard();
    const rows = [
        board[0] + board[1] + board[2],
        board[3] + board[4] + board[5],
        board[6] + board[7] + board[8],
        board[0] + board[4] + board[8],
        board[2] + board[4] + board[6],
        board[0] + board[3] + board[6],
        board[1] + board[4] + board[7],
        board[2] + board[5] + board[8]
    ];
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].length === 3 && rows[i].split('').every((value) => value === rows[i][0]) ) return true
    }
    return isFullyFilled(board);
}

function renderTurnMessage() {
    messageOutput.innerText = myTurn ? "Your turn." : "Your opponent's turn";
}

function switchTurn() {
    myTurn = !myTurn;
    renderTurnMessage();
    disableCellsSwitcher(!myTurn);
}

function makeMove(e) {
    e.preventDefault();
    if(myTurn && e.target.innerText === "") {
        socket.emit('make.move', {
            symbol: symbol,
            position: e.target.id
        });
    }
}

socket.on('move.made', function (data) {
    document.getElementById(data.position).innerText = data.symbol;
    if(isGameOver()) {
        if (isFullyFilled(getBoard())) messageOutput.innerText = 'Game over. Dead heat';
        else if (messageOutput.innerText = myTurn) {
            let urlParams = new URLSearchParams(window.location.search);
            console.log(urlParams.get("user"));
            let user = urlParams.get("user");
            fetch("http://localhost:5000/api/stat/update", {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user
                },
                method: "POST",
                body: JSON.stringify({sum: 50 })
            }).then(() => {messageOutput.innerText = 'Game over. You won!'; location.reload()});
        }
        else {
            let urlParams = new URLSearchParams(window.location.search);
            console.log(urlParams.get("user"));
            let user = urlParams.get("user");
            fetch("http://localhost:5000/api/stat/update", {
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': user
                },
                method: "POST",
                body: JSON.stringify({sum: -50 })
            }).then(() => {messageOutput.innerText = 'Game over. You lost.'; location.reload()});
        }
        disableCellsSwitcher(true);
    }
    else switchTurn();
});

socket.on('game.begin', function (data) {
    symbol = data.symbol;
    document.getElementById('symbol').innerText = symbol;
    myTurn = symbol === 'O';
    switchTurn();
});

socket.on('opponent.left', function () {
    messageOutput.innerText = 'Your opponent left the game.';
    disableCellsSwitcher(true);
});

window.onload = () => {
    disableCellsSwitcher(true);
    allCells((cell) => cell.onclick = makeMove);
};
