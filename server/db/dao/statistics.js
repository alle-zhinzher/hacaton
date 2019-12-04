const Stat = require('../models/Statistics');

const getUserStatistics = (id) => Stat.findOne({ userID: id });
const upTotalWin = (userID) => {
    let totalWin = 0
    Stat.findOne({ userID })
        .then(stat => {
            console.log(stat.totalWin)
            totalWin = stat.totalWin;
        });
    totalWin++
    console.log(totalWin)

    return Stat.updateOne({ userID }, { $set: { totalWin } });
}

const downTotalaLose = (id) => User.findOne({ userID: id });
const updateMaxWin = (id) => User.findOne({ userID: id });
const updateMaxLose = (id) => User.findOne({ userID: id });

module.exports = {
    getUserStatistics,
    upTotalWin,
};