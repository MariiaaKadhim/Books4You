const mongoose = require("mongoose")

const Schema = mongoose.Schema

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
    userid: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("Book", bookSchema)
