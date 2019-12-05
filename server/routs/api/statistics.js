const express = require('express');
const router = express.Router();
// Middleware
const auth = require('../middleware/auth');
// DAO
const stat = require('../../db/dao/statistics');

// @route   GET api/stat
// @desc    Get user stat
// @access  Private
router.get('/', auth, (req, res) => {
    const { id } = req.user
    stat.getUserStatistics(id)
        .then(statistic => res.json(statistic));
});

// @route   GET api/stat/update
// @desc    Update User statistic
// @access  Private
router.post('/update', auth, (req, res) => {
    const { id } = req.user;
    const { sum } = req.body;
    stat.updateUserStatistic(id, sum)
        .then(newStat => {
            res.json(newStat)
        });
});


module.exports = router;