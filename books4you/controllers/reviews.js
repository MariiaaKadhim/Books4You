const Book = require("../models/book")

module.exports = {
  create,
}

async function create(req, res) {
  try {
    const book = await Book.findById(req.params.id)

    book.reviews.push(req.body)

    await book.save()
    res.redirect(`/books/show/${book._id}`)
  } catch (err) {
    console.log(err)
    // res.redirect(`/admins/${book._id}`)
  }
}
