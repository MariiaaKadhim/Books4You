const mongoose = require('mongoose')

const Schema = mongoose.Schema

const reviewsSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

const bookSchema = new Schema(
  {
    name: String,
    category: String,
    author: String,
    publishDate: Date,
    summary: String,
    poster: String,
    available: String,
    // rating: Number,
    userid: { type: Schema.Types.ObjectId, ref: 'User' },
    review: [reviewsSchema]
    // categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
  },
  {
    timestamps: true
  }
)

// const categorySchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   id: {
//     type: Number,
//     required: true
//   },
//   book: [bookSchema]
// })

module.exports = mongoose.model('Book', bookSchema)
