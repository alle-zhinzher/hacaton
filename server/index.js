const config = require('config');
const serverConfig = config.get('server');
// App initialization
const express = require('express');
var cors = require('cors')
// app initialization

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const roulette = require('./roulette/roulette')

// App initialization

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
server.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
//app.listen(serverConfig.PORT, () => console.log(`Server started on port ${serverConfig.PORT}`));
