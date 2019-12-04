const User = require('../models/User');
const bcActions = require('../../utils/bcrytptActions');

const registerUser = (username, email, password) => {
    const hashedPassword = bcActions.genPassword(password);
    return new User({ username, email, password: hashedPassword }).save();
}

module.exports = {
    registerUser,
}