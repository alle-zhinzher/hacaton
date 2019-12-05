const config = require('config');
const serverConfig = config.get('server');
// App initialization
const express = require('express');
var cors = require('cors')
// app initialization

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')();
//const io = require('socket.io')(server);
const roulette = require('./roulette/roulette')

// App initialization
const Roulette = new roulette(io);
io.on('connection', function(socket){
    //console.log("THIS");
    //console.log(this);
    socket.on('makeBet',(msg)=>{
        if(this.gameState=="endGame"){
          //error
        }
        const {user,bet,betType} = msg;
        //console.log(user);
        //console.log(bet);
        //console.log(betType);
        Roulette.makeBet(user,betType,bet);
        io.emit("makeBet",Roulette.bets);
    });

    socket.on("startGame", ()=>{Roulette.startGame()});
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
  });


app.use(express.json())
// Connect database
require('./db/connection/mongoose');
//Allow CORS
app.use(cors())
// Middleware
app.use(require('./routs/middleware/logger'));
// API routs
app.use('/api/user', require('./routs/api/user'));
app.use('/api/auth', require('./routs/api/auth'));
app.use('/api/stat', require('./routs/api/statistics'));
// Run server
server.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
//app.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
const port = 8000;
io.listen(port);