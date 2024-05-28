const Book = require('../models/book')
const Review = require('../models/review')

async function create(req, res) {
  try {
    console.log('Adding review')
    const book = await Book.findById(req.params.id)
    console.log('Book', JSON.stringify(book))
    // Create new review
    // Push review._id into book.reviews
    book.review.push(req.body)

    await book.save()
    res.redirect(`/books`)
  } catch (err) {
    console.log(err)
    // res.redirect(`/admins/${book._id}`)
  }
}

module.exports = {
  create
}
