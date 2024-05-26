const mongoose = require('mongoose')

const Schema = mongoose.Schema

const categorySchema = new Schema({
  category: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  }
})

const bookSchema = new Schema(
  {
    name: String,
    category: [categorySchema],
    author: String,
    publishDate: Date,
    summary: String,
    poster: String,
    rating: Number
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Book', bookSchema)
