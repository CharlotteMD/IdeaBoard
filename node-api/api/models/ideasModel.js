'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IdeaSchema = new Schema({
  title: {
    type: String,
    required: 'Please enter a title for your idea'
  },
  body: {
    type: String,
    required: 'Enter your idea here'
  },
  uniqueID: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('Ideas', IdeaSchema);
