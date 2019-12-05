const express = require('express');
const app = express();
const http = require('http').Server(app);
const port = 80;
const io = require('socket.io')(http);
const players = {};
let unmatched = null;

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port, function () {
    console.log(`Server is listening on port ${port}`);
});

function joinGame(socket) {
    players[socket.id] = {
        opponent: unmatched,
        symbol: 'X',
        socket: socket
    };
    if (unmatched) {
        players[socket.id].symbol = 'O';
        players[unmatched].opponent = socket.id;
        unmatched = null;
    } else unmatched = socket.id;
}

function getOpponent(socket) {
    if (players[socket.id].opponent) {
        return players[ players[socket.id].opponent ].socket;
    }
}

io.on('connection', function (socket) {
    console.log(`Player ${socket.id} connected`);
    joinGame(socket);
    if (getOpponent(socket)) {
        socket.emit('game.begin', {
            symbol: players[socket.id].symbol
        });
        getOpponent(socket).emit('game.begin', {
            symbol: players[getOpponent(socket).id].symbol
        });
    }
    socket.on('make.move', function (data) {
        if (getOpponent(socket)) {
            console.log(`Detected move by ${socket.id} player(${data.symbol}) at ${1 + +data.position[1]} cell`);
            socket.emit('move.made', data);
            getOpponent(socket).emit('move.made', data);
        }
    });

    socket.on('disconnect', function () {
        if(unmatched === socket.id) unmatched = null;
        console.log(`Player ${socket.id} left the game`);
        if (getOpponent(socket)) {
            getOpponent(socket).emit('opponent.left');
        }
    });
});
