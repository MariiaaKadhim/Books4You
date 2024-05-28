const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    name: String,
    googleId: {
      type: String,
      required: true,
    },
    email: String,
    avatar: String,
    type: { type: Boolean, default: false },
    list: [{ type: Schema.Types.ObjectId, ref: "Book" }],
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model("User", userSchema)
