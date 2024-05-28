const mongoose = require("mongoose")

const Schema = mongoose.Schema

const reviewsSchema = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
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
    userid: [{ type: Schema.Types.ObjectId, ref: "User" }],

    review: [reviewsSchema],
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Book", bookSchema)
