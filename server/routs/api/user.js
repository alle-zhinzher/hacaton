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

/* 
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVkZTdkYTU4NmU0NTlhNDM2N2UxM2JkNCIsImlhdCI6MTU3NTQ3NTgwMiwiZXhwIjoxNTc1NTYyMjAyfQ.dLg2n6U6LQsyWAsOoedZJQVQxC-nm5wqGLcXFCb49Nc"
*/
module.exports = router;
