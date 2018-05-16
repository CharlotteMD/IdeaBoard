const mongoose = require('mongoose');

const ideaSchema = new mongoose.Schema({
  title: {type: String, required: true},
  body: {type: String, maxlength: 140 },
  uniqueID: Number
},
{
  timestamps: true
});


module.exports = mongoose.model('Idea', ideaSchema);
