const jwt = require('jsonwebtoken');
const config = require('config');

const JWTconfig = config.get('JWTconfig');

module.exports = (id) => jwt.sign({ id }, JWTconfig.secret, { expiresIn: JWTconfig.expiresTime });
