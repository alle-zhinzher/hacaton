 

 function Roulette (io) {
    this.io = io;
    this.gameState = "endGame";
    this.users=[];
    this.bets={};
    //this.init()
 }


Roulette.prototype.endGame =function() {
    this.gameState = "endGame";
    result = Math.floor(Math.random() * Math.floor(37));
    resultColor =(result==0)?"green":(result%2==0)?"red":"black";
    for(user in this.bets){
       for(betType in  this.bets[user]){
           const bet = this.bets[user][betType];
           if(betType==resultColor){
               //user = token
               //добавить игроку user  на счет bet монет
           }else if(betType==result){
                //добавить игроку user на счет bet*35
           }
           else {
               //снять со счета user bet монет
           }
           
       }
    }
    //TODO change all users money in db
    this.io.emit("endGame",{result});
    this.bets={};
}

Roulette.prototype.addUser =function(user) {
    if (this.users.length<10){
        users.push(user);
    }
}
Roulette.prototype.makeBet = function(user,betType,bet) {
    if(this.bets[user]==undefined){
        //console.log(`set bets.${user} to {}`)
        this.bets[user]={};
    }
    this.bets[user][betType]=bet;
}

Roulette.prototype.startGame = function() {
    if(this.gameState=="endGame"){
        console.log("start");
        //console.log(this.gameState);
        //console.log("starting game");
        this.gameState = "TakingBets";
        setTimeout(this.endGame.bind(this),45000);
        this.io.emit("startGame");
    }
    else{
        console.log(this);
        console.log(this.gameState);
        console.log("game is going")
        //cb("error");
        //error
    }
    console.log(this)
}
/* 
 class roulette{
    constructor(io){
        this.io = io;
        this.gameState = "endGame";
        this.users=[];
        this.bets={};
this.oninit();
    }
    oninit(){
        this.io.on('connection', function(socket){
            console.log('a user connected');
            socket.on('makeBet',(msg)=>{
                if(this.gameState=="endGame"){
                  //error
                }
                const {user,bet,betType} = msg;
                this.makeBet(user,bet,betType);
                this.io.emit("makeBet",roulette.bets);
            });
            socket.on("startGame", 
            /*        
            (msg,cb) => {
                    if(this.gameState=="endGame"){
                    console.log(this);
                    console.log(this.gameState);
                    console.log("starting game");
                    this.startGame();
                    io.emit("startGame")
                }
                else{
                    console.log(this);
                    console.log(this.gameState);
                    console.log("game is going")
                    //cb("error");
                    //error
                }
                
            })
            socket.on('disconnect', function(){
              console.log('user disconnected');
            });
          });
    }


    endGame(){
        this.gameState = "endGame";
        result = Math.floor(Math.random() * Math.floor(max));
        //TODO change all users money in db
        io.emit("gameEnd",{result});
        this.bets=[];
    }
    addUser(user){
        if (this.users.length<10){
            users.push(user);
        }
    }
    makeBet (user,betType,bet){
        this.bets[user][betType]=bet;
    }
    startGame(){
        if(this.gameState=="endGame"){
            console.log(this);
            console.log(this.gameState);
            console.log("starting game");
            this.gameState = "TakingBets";
            this.setTimeout(this.endGame,45000);
            this.io.emit("startGame")
        }
        else{
            console.log(this);
            console.log(this.gameState);
            console.log("game is going")
            //cb("error");
            //error
        }
        console.log(this)
    }
}
*/
module.exports = Roulette;