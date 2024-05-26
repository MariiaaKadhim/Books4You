const mongoose = require('mongoose')
const Schema = mongoose.Schema

const myListSchema = new Schema(
  {
    user: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
    books: [{ type: Schema.Types.ObjectId, ref: 'Book', required: true }]
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Mylist', myListSchema)
