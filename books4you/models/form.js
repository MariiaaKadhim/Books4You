const mongoose = require('mongoose')

const formDataSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  reason: {
    type: String,
    required: true
  },
  user_email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('requests', formDataSchema)
