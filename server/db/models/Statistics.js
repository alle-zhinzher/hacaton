const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const StatSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    totalWin: {
        type: Number,
        default: 0,
    },
    totalLose: {
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
