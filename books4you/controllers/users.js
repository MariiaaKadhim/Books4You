const Book = require('../models/book')

//This function will show all the categories on the main page.
async function index(req, res) {
  try {
    const category = req.params.category
    let Books = await Book.find({ category: category })
    res.render('users/index', {
      Books,
      title: 'Users Page',
      path: req.originalUrl
    })
  } catch (e) {
    console.error(e)
    res.redirect('/users')
  }
}

module.exports = {
  index
}
