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

// @route   GET api/stat/up
// @desc    Get user stat
// @access  Private
router.get('/up', auth, (req, res) => {
    const { id } = req.user
    stat.upTotalWin(id)
        .then(statistic => res.json(statistic));
});


module.exports = router;