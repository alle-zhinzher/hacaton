const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    exp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 1,
    },
    money: {
        type: Number,
        default: 500,
    }
});

module.exports = User = mongoose.model('user', UserSchema);
