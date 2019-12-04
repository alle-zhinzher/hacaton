const express = require('express');
const router = express.Router();

const genToken = require('../../utils/genJWT');
const users = require('../../db/dao/user');

// @route   POST api/user
// @desc    Register a new User
// @access  Public
router.post('/', (req, res) => {
    const { username, email, password } = req.body;
    users.registerUser(username, email, password)
        .then(user => {
            res.status(200).send({ token: genToken(user._id), user });
        })
        .catch(err => {
            res.status(401).send({ message: "Incorrect Data" });
        })
});

// @route   GET api/users
// @desc    Get all users
// @access  Public
router.get('/', (req, res) => {
    users.getAllUsers()
        .then(users => res.json(users));
});

module.exports = router;
