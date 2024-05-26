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
    rating: Number,
    categories: [{ type: Schema.Types.ObjectId, ref: "Category" }],
  },
  {
    timestamps: true,
  }
)
module.exports = mongoose.model("Book", bookSchema)
