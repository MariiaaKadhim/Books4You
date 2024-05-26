const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookCategorySchema = new Schema({
  category: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  book: [bookSchema],
})

const bookSchema = new Schema(
  {
    name: String,
    category: String,
    author: String,
    publishDate: Date,
    summary: String,
    poster: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Book", bookSchema)
