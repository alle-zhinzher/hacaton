const Test = require('../models/Test');


const testDB = () => new Test({ isWorks: true }).save();

module.exports = {
    testDB
}