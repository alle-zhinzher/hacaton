const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StatSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    totalWinSum: {
        type: Number,
        default: 0,
    },
    totalWinCount: {
        type: Number,
        default: 0,
    },
    totalLoseSum: {
        type: Number,
        default: 0,
    },
    totalLoseCount: {
        type: Number,
        default: 0,
    },
    maxWin: {
        type: Number,
        default: 0,
    },
    maxLose: {
        type: Number,
        default: 0,
    },
});

module.exports = User = mongoose.model('statistics', StatSchema);
