const bcrypt = require('bcryptjs');

const genPassword = (password) => bcrypt.hashSync(password, 8);

const comparePasswords = (passedPassword, realPassword) => bcrypt.compareSync(passedPassword, realPassword);

module.exports = {
    genPassword,
    comparePasswords,
}
