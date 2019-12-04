const mongoose = require('mongoose');
const config = require('config');
const dbConfig = config.get('db');

const db = `mongodb+srv://${dbConfig.userName}:${dbConfig.password}@nodetask-fu2kz.mongodb.net/${dbConfig.collectionName}?retryWrites=true&w=majority`

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));
