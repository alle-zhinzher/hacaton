const path = require('path');
const express = require('express');
const config = require('config');

const serverConfig = config.get('server');
// App initialization
const app = express();
app.use(express.json())

// Connect database
require('./db/connection/mongoose');
// Middleware
app.use(require('./routs/middleware/logger'));
// API routs
app.use('/api/user', require('./routs/api/user'));
app.use('/api/auth', require('./routs/api/auth'));

// Run server
app.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
