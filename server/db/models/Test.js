const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TestSchema = new Schema({
  isWorks: {
    type: Boolean,
    default: false
  }
});

module.exports = Test = mongoose.model('test', TestSchema);