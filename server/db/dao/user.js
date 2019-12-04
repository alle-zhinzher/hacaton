const User = require('../models/User');
const bcActions = require('../../utils/bcrytptActions');

const registerUser = (username, email, password) => {
    const hashedPassword = bcActions.genPassword(password);
    return new User({ username, email, password: hashedPassword }).save();
};

const getUserByEmail = (email) => User.findOne({ email });

const getUserByID = (id) => User.findById(id).select('-password');

const getAllUsers = () => User.find();

const deleteUser = (id) => User.findByIdAndDelete(id);

module.exports = {
    registerUser,
    getUserByID,
    getUserByEmail,
};