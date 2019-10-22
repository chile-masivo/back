const { Schema } = require('mongoose');
// alerts-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = new Schema({

  email: {
    type: String
  },
  password: {
    type: String
  }

}, {
  timestamps: true
});

