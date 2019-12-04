module.exports = (text, color) => {
    //Change text color in console
    let consoleColor = ''
    switch(color){
        case "RED": consoleColor = "\x1b[31m"; break;
        case "GREEN": consoleColor = "\x1b[32m"; break;
        case "YELLOW": consoleColor = "\x1b[33m"; break;
        case "BLUE": consoleColor = "\x1b[34m"; break;
        case "BLACK": consoleColor = "\x1b[30m"; break;
        default: consoleColor = "\x1b[37m"; break; //White
    }

    console.log(consoleColor, text);  //Otput text and set console color to white
};