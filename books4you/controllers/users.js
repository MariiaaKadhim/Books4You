const Book = require('../models/book')

async function index(req, res) {
  try {
    const category = req.params.category
    console.log(category)
    let Books = await Book.find({ category: category })
    res.render('users/index', { Books, title: 'Users Page' })
    console.log(JSON.stringify(Books))
  } catch (e) {
    console.error(e)
    res.redirect('/users')
  }
}

// async function show(req, res) {
//   try {
//     const category = req.params.category
//     let books = await Catagory.find({ category: category })
//     res.render('users/show', { books, title: 'Books List' })
//     console.log(JSON.stringify(books))
//   } catch (e) {
//     console.error(e)
//     res.redirect('users/index')
//   }
// }

// const Book = require('../models/book')

// async function index(req, res) {
//   try {
//     let categories = await Book.find({}, { category: 0 })
//     // mongoDB method to call catagories of books
//     res.render('users/index', { categories, title: 'Users Page' })
//   } catch (e) {
//     console.error(e)
//     res.redirect('users/index')
//   }
// }
module.exports = {
  index
}
