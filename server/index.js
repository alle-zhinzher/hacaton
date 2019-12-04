const path = require('path');
const express = require('express');
const config = require('config');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const roulette = require('./roulette/roulette')

const serverConfig = config.get('server');
// App initialization

app.use(express.json())

// Connect database
require('./db/connection/mongoose');
// Middleware
app.use(require('./routs/middleware/logger'));
// API routs
app.use('/api/test', require('./routs/api/test'));
// Run server
server.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
//app.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
