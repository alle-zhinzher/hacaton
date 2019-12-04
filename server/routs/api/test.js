const express = require('express');
const router = express.Router();
const test = require('../../db/dao/test');


// @route   GET api/test
// @desc    Get API fot testing server
// @access  Public
router.get('/', (req, res) => {
    test.testDB()
        .then(test => res.json({ test }));
});

module.exports = router;