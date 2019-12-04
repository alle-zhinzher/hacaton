const logTextWithColor = require('../../lib/colors')

module.exports = (req, res, next) => {
    const text = `${req.method} ${req.url}`
    let color = ''

    switch (req.method) {
        case "GET": color = "GREEN"; break;
        case "POST": color = "BLUE"; break;
        case "PUT": color = "YELLOW"; break;
        case "DELETE": color = "RED"; break;
        default: color = "BLACK"; break;
    }

    logTextWithColor(text, color)

    next();
};