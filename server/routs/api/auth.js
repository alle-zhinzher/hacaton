const express = require('express');
const router = express.Router();
// Middleware
const auth = require('../middleware/auth');
// Utils
const genToken = require('../../utils/genJWT');
const bcActions = require('../../utils/bcrytptActions');
// DB
const users = require('../../db/dao/user');


// @route   POST api/auth
// @desc    Login User
// @access  Public
router.post('/', (req, res) => {
    const { email, password } = req.body;
    users.getUserByEmail(email)
        .then(user => {
            if (!user) { res.status(404).json({ msg: "User with this Email not found" }) }

            const passwordIsValid = bcActions.comparePasswords(password, user.password)

            passwordIsValid ?
                res.status(200).send({ token: genToken(user._id), user })
                :
                res.status(401).json({ msg: "Incorect password" })
        });
});

// @route   GET api/auth/user
// @desc    Get user data by Token
// @access  Private
router.get('/user', auth, (req, res) => {
    const { id } = req.user
    users.getUserByID(id)
        .then(user => res.json(user));
});


// @route   POST api/auth/login
// @desc    Login User
// @access  Public
router.post('/login', (req, res) => {
    const { email, password } = req.body;
    users.getUserByEmail(email)
        .then(user => {
            if (!user) { res.status(404).json({ msg: "User not found" }) }
            const passwordIsValid = bcActions.comparePasswords(password, user.password)
            passwordIsValid ?
                res.status(200).send({ token: genToken(user._id), user })
                :
                res.status(401).json({ msg: "Password does not match" })
        })
});


module.exports = router;
