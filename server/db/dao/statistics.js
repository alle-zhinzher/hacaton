const Stat = require('../models/Statistics');
const userDAO = require('./user');

const getUserStatistics = (userID) => Stat.findOne({ userID });

const upTotalWinCount = (userID) => {
    Stat.findOneAndUpdate({ userID }, { $inc: { totalWinCount: 1 } }).exec()
}

const upTotalLoseCount = (userID) => {
    Stat.findOneAndUpdate({ userID }, { $inc: { totalLoseCount: 1 } }).exec()
}

const upTotalWinSum = (userID, sum) => {
    Stat.findOneAndUpdate({ userID }, { $inc: { totalWinSum: sum } }).exec()
}

const upTotalLoseSum = (userID, sum) => {
    console.log(sum)
    Stat.findOneAndUpdate({ userID }, { $inc: { totalLoseSum: sum } }).exec()
}

const updateMaxWin = (userID, cureentWin) => {
    Stat.findOne({ userID })
        .then(stat => {
            cureentWin > stat.maxWin ?
                Stat.findOneAndUpdate({ userID }, { maxWin: cureentWin }).exec()
                :
                null
        });
};

const updateMaxLose = (userID, cureentWin) => {
    Stat.findOne({ userID })
        .then(stat => {
            console.log(cureentWin, stat.maxWin)
            cureentWin > stat.maxWin ?
                Stat.findOneAndUpdate({ userID }, { maxLose: cureentWin }).exec()
                :
                null
        });
};

const updateUserStatistic = (userID, cureentWin) => {
    if (cureentWin > 0) {
        upTotalWinCount(userID);
        upTotalWinSum(userID, cureentWin);
        updateMaxWin(userID, cureentWin);
    } else {
        const validWin = cureentWin * -1;
        upTotalLoseCount(userID);
        upTotalLoseSum(userID, validWin);
        updateMaxLose(userID, validWin);
    };

    userDAO.updateUserMoney(userID, cureentWin);
    return getUserStatistics(userID)
}

module.exports = {
    updateUserStatistic,
    getUserStatistics,
};