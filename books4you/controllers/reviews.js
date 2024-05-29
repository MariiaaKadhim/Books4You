const Book = require("../models/book")

async function deleteReview(req, res) {
  try {
    const bookId = req.body.bookId

    const reviewId = req.params.id
    console.log("review id" + reviewId)

    const book = await Book.findById(bookId)
    const reviewIndex = book.reviews.findIndex(
      (review) => review._id == reviewId
    )
    book.reviews.splice(reviewIndex, 1)
    await book.save()

    res.redirect(`/books/show/${bookId}`)
  } catch (err) {
    console.log(err)
  }
}

async function create(req, res) {
  try {
    const book = await Book.findById(req.params.id)
    book.reviews.push(req.body)
    await book.save()
    res.redirect(`/books/show/${book._id}`)
  } catch (err) {
    console.log(err)
  }
}

module.exports = {
  create,
  delete: deleteReview,
}
