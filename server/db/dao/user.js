const User = require('../models/User');
const Stat = require('../models/Statistics');
const bcActions = require('../../utils/bcrytptActions');

const registerUser = (username, email, password, firstName, lastName) => {
    const hashedPassword = bcActions.genPassword(password);
    const user = new User({ username, email, password: hashedPassword, firstName, lastName }).save();
    user.then(user => {
        new Stat({ userID: user._id }).save();
    })
    return user
};

const getUserByEmail = (email) => User.findOne({ email });

const getUserByID = (id) => User.findById(id).select('-password');

const getAllUsers = () => User.find();

const updateUserMoney = (id, currentWin) => {
    User.findOneAndUpdate({ _id: id }, { $inc: { money: currentWin } }).exec()
}

module.exports = {
    registerUser,
    getUserByID,
    getUserByEmail,
    getAllUsers,
    updateUserMoney,
};