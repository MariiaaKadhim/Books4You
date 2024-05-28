const Book = require('../models/book')

//This function will show all the categories on the main page.
async function index(req, res) {
  try {
    const category = req.params.category
    let Books = await Book.find({ category: category })
    res.render('books/index', {
      Books,
      title: 'Books Page',
      path: req.originalUrl
    })
  } catch (e) {
    console.error(e)
    res.redirect('/books/index')
  }
}

//This function will show a specific book by its id.
async function show(req, res) {
  const book = await Book.findById(req.params.id)
  res.render('books/show', { title: 'Book', book, path: req.originalUrl })
}

module.exports = {
  index,
  show
}
