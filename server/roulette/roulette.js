exports.default = class roulette{
    constructor(io){
        this.io = io;
        this.gameState = "TakingBets";
        this.users=[];
        this.bets={};
        io.on('connection', function(socket){
            console.log('a user connected');
            socket.on('makeBet',(msg)=>{
                if(this.gameState=="endGame"){
                  //error
                }
                const {user,bet,betType} = msg;
                this.makeBet(user,bet,betType);
                io.emit("makeBet",roulette.bets);
            });
            socket.on("startGame",function(msg,cb){
                if(gameState=="endGame"){
                    this.startGame();
                    io.emit("startGame")
                }
                else{
                    cb("error");
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
        this.gameState = "TakingBets";
        this.setTimeout(this.endGame,45000);
    }
}