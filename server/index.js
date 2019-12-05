const config = require('config');
const serverConfig = config.get('server');
// App initialization
const express = require('express');
var cors = require('cors')
// app initialization
const app = express();
app.use(express.json())
// Connect database
require('./db/connection/mongoose');
//Allow CORS
app.use(cors())
// Middleware
app.use(require('./routs/middleware/logger'));
// API routs
app.use('/api/user', require('./routs/api/user'));
app.use('/api/auth', require('./routs/api/auth'));
app.use('/api/stat', require('./routs/api/statistics'));
// Run server
app.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
