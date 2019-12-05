const jwt = require('jsonwebtoken');
const config = require('config');
const { updateUserStatistic } = require('../db/dao/statistics')
const JWTconfig = config.get('JWTconfig');
function Roulette(io) {
    this.io = io;
    this.gameState = "endGame";
    this.users = [];
    this.bets = {};
    //this.init()
}


Roulette.prototype.endGame = function () {
    this.gameState = "endGame";
    result = Math.floor(Math.random() * Math.floor(37));
    resultColor = (result == 0) ? "green" : (result % 2 == 0) ? "red" : "black";
    Sum = 0;
    for (user in this.bets) {
        Sum = 0;
        for (betType in this.bets[user]) {
            const { id } = jwt.verify(user, JWTconfig.secret);
            const bet = this.bets[user][betType];
            if (betType == resultColor) {
                updateUserStatistic(id, bet);
                //user = token
                //добавить игроку user  на счет bet монет
            } else if (betType == result) {
                //добавить игроку user на счет bet*35
                Sum += bet * 35;
                updateUserStatistic(id, bet * 35);
            }
            else {
                //снять со счета user bet монет
                updateUserStatistic(id, bet * (-1));
            }

        }
    }
    //TODO change all users money in db
    this.io.emit("endGame", { result, Sum });
    this.bets = {};
}

Roulette.prototype.addUser = function (user) {
    if (this.users.length < 10) {
        users.push(user);
    }
}
Roulette.prototype.makeBet = function (user, betType, bet) {
    if (this.bets[user] == undefined) {
        //console.log(set bets.${user} to {})
        this.bets[user] = {};
    }
    this.bets[user][betType] = bet;
}

Roulette.prototype.startGame = function () {
    if (this.gameState == "endGame") {
        console.log("start");
        //console.log(this.gameState);
        //console.log("starting game");
        this.gameState = "TakingBets";
        setTimeout(this.endGame.bind(this), 3000);
        this.io.emit("startGame");
    }
    else {
        console.log(this);
        console.log(this.gameState);
        console.log("game is going")
        //cb("error");
        //error
    }
    console.log(this)
}
module.exports = Roulette;