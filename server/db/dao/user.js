const User = require('../models/User');
const bcActions = require('../../utils/bcrytptActions');

const registerUser = (username, email, password, firstName, lastName) => {
    const hashedPassword = bcActions.genPassword(password);
    return new User({ username, email, password: hashedPassword, firstName, lastName }).save();
};

const getUserByEmail = (email) => User.findOne({ email });

const getUserByID = (id) => User.findById(id).select('-password');

const getAllUsers = () => User.find();

module.exports = {
    registerUser,
    getUserByID,
    getUserByEmail,
    getAllUsers,
};