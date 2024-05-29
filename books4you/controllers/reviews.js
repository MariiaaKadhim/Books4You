const Book = require("../models/book")

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

async function deleteReview(req, res) {
  try {
    const book = await Book.findOne({
      "reviews._id": req.params.id,
      "reviews.user": req.user._id,
    })
    if (!book) return res.redirect("/books")

    book.reviews.remove(req.params.id)

    await book.save()
  } catch (err) {
    res.redirect(`/books/show/${book._id}`)
  }
}

// async function deleteReview(req, res) {
//   try {
//     const bookId = req.body.bookId
//     const adminId = req.user._id
//     const book = await Book.findByIdAndDelete(req.params.id, { adminId })
//     res.redirect(`/books/show/${bookId}`)
//   } catch (err) {
//     console.log(err)
//   }
// }

module.exports = {
  create,
  delete: deleteReview,
}
