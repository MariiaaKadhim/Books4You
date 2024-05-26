const Book = require('../models/book')

async function index(req, res) {
  try {
    let categories = await Book.find({}, { category: 0 })
    // mongoDB method to call catagories of books
    res.render('users/index', { categories, title: 'Users Page' })
  } catch (e) {
    console.error(e)
    res.redirect('users/index')
  }
}
module.exports = {
  index
}
